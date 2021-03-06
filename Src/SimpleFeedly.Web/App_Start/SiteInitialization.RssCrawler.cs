﻿namespace SimpleFeedly
{
    using HtmlAgilityPack;
    using Microsoft.AspNet.SignalR;
    using Newtonsoft.Json;
    using NLog;
    using SimpleFeedly.Core.Utils;
    using SimpleFeedly.Rss;
    using SimpleFeedly.Rss.Entities;
    using SimpleFeedly.SettingParsers;
    using StackExchange.Exceptional;
    using System;
    using System.Collections.Concurrent;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;
    using System.Net;
    using System.Runtime.Caching;
    using System.Text;
    using System.Text.RegularExpressions;
    using System.Threading.Tasks;
    using System.Xml;

    public static partial class SiteInitialization
    {
        private static ConcurrentBag<string> _feedCache = new ConcurrentBag<string>();
        private static int _currentDate = DateTime.Now.Day;
        private static readonly Random _ran = new Random();

        public static void InitializeRssCrawler(ILogger logger, RandomTimeSpan channelFetchingDelay, TimeSpan channelErrorDelay, TimeSpan errorDelay, TimeSpan loopDelay, int nbrOfWorker = 5)
        {
            nbrOfWorker = nbrOfWorker == 0 ? 1 : nbrOfWorker;

            Task.Run(() =>
            {
                var channelHubCtx = GlobalHost.ConnectionManager.GetHubContext<Hubs.ChannelHub>();

                //System.Threading.Tasks.Task.Run(() =>
                //{
                //    var xxx = 0;
                //    while (true)
                //    {
                //        xxx++;
                //        channelHubCtx.Clients.All.updateChannelProgress(new { Message = "hello " + xxx, IsSleeping = true });

                //        Console.WriteLine(xxx);
                //        System.Threading.Thread.Sleep(1000);
                //    }
                //});

                ObjectCache cache = MemoryCache.Default;

                while (true)
                {
                    if (_currentDate != DateTime.Now.Day)
                    {
                        _feedCache = new ConcurrentBag<string>();
                        _currentDate = DateTime.Now.Day;
                    }

                    var feedUrl = string.Empty;
                    try
                    {
                        List<RssChannelsRow> channels = channels = SimpleFeedlyDatabaseAccess.GetActiveChannels().OrderBy(x => x.Id).ToList();

                        var count = 0;

                        foreach (var channel in channels)
                        {
                            feedUrl = channel.Link;

                            count++;

                            logger.Info($"- [{count}/{channels.Count}] Working on channel: {channel.Id} | {feedUrl}");
                            channelHubCtx.Clients.All.updateChannelProgress(new { Message = $"<strong>Fetching</strong> <a href='{channel.Link}' target='_blank'>{channel.Link}</a>", IsSleeping = false });

                            if (string.IsNullOrWhiteSpace(feedUrl))
                            {
                                logger.Warn($"=> Channel has empty link: {channel.Id}");
                                continue;
                            }

                            var channelSleepingCacheKey = "channel_is_sleeping|" + channel.Id;

                            var isSleeping = cache[channelSleepingCacheKey] as bool?;
                            if (isSleeping == null || isSleeping == false)
                            {
                                try
                                {
                                    var feed = RssCrawler.GetFeedsFromChannel(feedUrl, channel.RssCrawlerEngine ?? RssCrawlerEngine.CodeHollowFeedReader, out RssCrawlerEngine usedEngine, out Exception fetchFeedError);

                                    // update default engine for channel
                                    SimpleFeedlyDatabaseAccess.UpdateChannelDefaultEngine((long)channel.Id, fetchFeedError != null ? (RssCrawlerEngine?)null : usedEngine);

                                    if (feed != null && feed?.Items != null)
                                    {
                                        logger.Info($"  + Number of items: {feed.Items.Count}");
                                        var pageNumber = 1;
                                        var hasNew = false;

                                        while (true)
                                        {
                                            var batchItems = feed.Items
                                                .Skip(nbrOfWorker * (pageNumber - 1))
                                                .Take(nbrOfWorker)
                                                .ToList();

                                            if (batchItems.Count == 0)
                                            {
                                                break;
                                            }
                                            else
                                            {
                                                logger.Info($"    > Page number: {pageNumber}");
                                                var tasks = new List<Task>();

                                                for (int i = 0; i < batchItems.Count; i++)
                                                {
                                                    var fItem = batchItems[i];
                                                    tasks.Add(Task.Run(() =>
                                                    {
                                                        if (!StringUtils.IsUrl(fItem.Link))
                                                        {
                                                            return;
                                                        }

                                                        var feedItemKey = GenerateFeedItemKey(fItem);
                                                        var feedCacheKey = GenerateFeedCacheKey((long)channel.Id, feedItemKey);

                                                        if (string.IsNullOrWhiteSpace(feedItemKey) || string.IsNullOrWhiteSpace(fItem.Link))
                                                        {
                                                            logger.Info($"  + Skipped item: {JsonConvert.SerializeObject(fItem)}");
                                                            return;
                                                        }

                                                        if (!_feedCache.Contains(feedCacheKey))
                                                        {
                                                            if (!SimpleFeedlyDatabaseAccess.CheckExistFeedItem(string.IsNullOrWhiteSpace(channel.DomainGroup) ? channel.Link : channel.DomainGroup, feedItemKey))
                                                            {
                                                                var feedItem = new RssFeedItemsRow
                                                                {
                                                                    ChannelId = channel.Id,
                                                                    RssChannelDomainGroup = channel.DomainGroup,
                                                                    FeedItemKey = feedItemKey,
                                                                    Title = string.IsNullOrWhiteSpace(fItem.Title) ? fItem.Link : fItem.Title,
                                                                    Link = fItem.Link,
                                                                    Description = fItem.Description,
                                                                    PublishingDate = fItem.PublishingDate,
                                                                    Author = fItem.Author,
                                                                    Content = fItem.Content,
                                                                    //XmlData = fItem.XmlData
                                                                };

                                                                var coverImageUrl = fItem.GetFeedCoverImage();
                                                                if (!string.IsNullOrWhiteSpace(coverImageUrl))
                                                                {
                                                                    feedItem.CoverImageUrl = coverImageUrl;
                                                                }

                                                                SimpleFeedlyDatabaseAccess.InsertFeedItem(feedItem);

                                                                hasNew = true;
                                                            }

                                                            _feedCache.Add(feedCacheKey);
                                                        }
                                                    }));
                                                }

                                                Task.WaitAll(tasks.ToArray());

                                                pageNumber++;
                                            }
                                        }

                                        SimpleFeedlyDatabaseAccess.UpdateChannelErrorStatus((long)channel.Id, false, null);

                                        if (!hasNew)
                                        {
                                            cache.Add(channelSleepingCacheKey, true, DateTime.Now.Add(channel.RefreshTimeMinutes == null ? channelFetchingDelay.GenerateRamdomValue() : TimeSpan.FromMinutes((int)channel.RefreshTimeMinutes)));
                                        }
                                    }
                                    else
                                    {
                                        SimpleFeedlyDatabaseAccess.UpdateChannelErrorStatus((long)channel.Id, true, fetchFeedError == null ? null : JsonConvert.SerializeObject(fetchFeedError));

                                        if (fetchFeedError != null)
                                        {
                                            ErrorHandle(fetchFeedError, feedUrl);
                                        }
                                    }
                                }
                                catch (Exception err)
                                {
                                    SimpleFeedlyDatabaseAccess.UpdateChannelErrorStatus((long)channel.Id, true, JsonConvert.SerializeObject(err));

                                    cache.Add(channelSleepingCacheKey, true, DateTime.Now.Add(channelErrorDelay));
                                    logger.Error(err, $"An error occurred on channel: {channel.Id} | {feedUrl}");

                                    ErrorHandle(err, feedUrl);
                                }
                            }
                            else
                            {
                                logger.Info($"  + sleeping...");
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        logger.Error(ex, "An error occurred");

                        ErrorHandle(ex, feedUrl);

                        System.Threading.Thread.Sleep(errorDelay);
                    }

                    channelHubCtx.Clients.All.updateChannelProgress(new { Message = "<span class='link-muted'>Crawler's sleeping...</span>", IsSleeping = true });

                    _currentDate = DateTime.Now.Day;

                    // we should delay a little bit, some seconds maybe
                    System.Threading.Thread.Sleep(loopDelay);
                }
            });
        }

        private static string GenerateFeedItemKey(SimpleFeedlyFeedItem item)
        {
            if (string.IsNullOrWhiteSpace(item.Id))
            {
                if (string.IsNullOrWhiteSpace(item.Link))
                {
                    return null;
                }
                else
                {
                    return item.Link;
                }
            }
            else
            {
                return item.Id;
            }
        }

        private static string GenerateFeedCacheKey(long channelId, string feedItemKey)
        {
            return StringUtils.MD5Hash($"{channelId}>{feedItemKey}");
        }

        private static void ErrorHandle(Exception ex, string feedUrl)
        {
            // we can send an email for warning right here if needed

            // or just log error into some error stores, it's up to you
            ErrorStore.LogExceptionWithoutContext(ex, false, false,
                                       new Dictionary<string, string>
                                       {
                                           {"feedUrl", feedUrl }
                                       });
        }
    }

    public class RssCrawler
    {
        /// <summary>
        /// GetFeedsFromChannel
        /// </summary>
        /// <param name="feedUrl">feed Url</param>
        /// <param name="defaultEngineType">crawler engine</param>
        /// <param name="isRest">
        /// Normally we call this method two times, first times with 'default' channel's crawler engine, and the last times for the rest crawler engine
        /// isRest = false: FIRST TIMES
        /// isRest = true: LAST TIMES
        /// </param>
        /// <param name="engineTypeResult"></param>
        /// <param name="error"></param>
        /// <returns></returns>
        public static SimpleFeedlyFeed GetFeedsFromChannel(string feedUrl, RssCrawlerEngine defaultEngineType, out RssCrawlerEngine engineTypeResult, out Exception error)
        {
            IRssEngine getEngine(RssCrawlerEngine type)
            {
                IRssEngine tmpEngine = null;
                switch (type)
                {
                    case RssCrawlerEngine.SyndicationFeed:
                        tmpEngine = new SyndicationFeedEngine();
                        break;
                    case RssCrawlerEngine.CodeHollowFeedReader:
                        tmpEngine = new CodeHollowFeedReaderEngine();
                        break;
                    case RssCrawlerEngine.ParseRssByXml:
                        tmpEngine = new ParseRssByXmlEngine();
                        break;
                    default:
                        
                        break;
                }

                if (tmpEngine == null)
                {
                    throw new Exception($"Can not find crawler engine for type <{type}>");
                }

                return tmpEngine;
            }

            RssCrawlerEngine currentEngineType = RssCrawlerEngine.CodeHollowFeedReader;
            var items = new List<SimpleFeedlyFeedItem>();

            try
            {
                // check default engine first
                IRssEngine rssEngine = getEngine(defaultEngineType);
                var feedItems = rssEngine.GetItems(feedUrl, out error);

                if (error == null && feedItems.Count > 0) // no error
                {
                    currentEngineType = defaultEngineType;
                    items = feedItems ?? new List<SimpleFeedlyFeedItem>();
                }
                else
                {
                    // check the rest engines
                    error = null;

                    foreach (RssCrawlerEngine engineLoop in (RssCrawlerEngine[])Enum.GetValues(typeof(RssCrawlerEngine)))
                    {
                        if (engineLoop == defaultEngineType)
                        {
                            continue;
                        }

                        currentEngineType = engineLoop;

                        rssEngine = getEngine(engineLoop);
                        feedItems = rssEngine.GetItems(feedUrl, out error);

                        items.AddRange(feedItems ?? new List<SimpleFeedlyFeedItem>());

                        if (error == null && feedItems.Count > 0) // no error
                        {
                            items = feedItems ?? new List<SimpleFeedlyFeedItem>();
                            break;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                error = ex;
            }

            engineTypeResult = currentEngineType;
            return new SimpleFeedlyFeed { Items = items ?? new List<SimpleFeedlyFeedItem>() };
        }
    }


    public class SimpleFeedlyFeed
    {
        public SimpleFeedlyFeed()
        {
            Items = new List<SimpleFeedlyFeedItem>();
        }

        public List<SimpleFeedlyFeedItem> Items { get; set; }
    }

    public class SimpleFeedlyFeedItem
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Link { get; set; }
        public string Description { get; set; }
        public DateTime PublishingDate { get; set; }
        public string Author { get; set; }
        public string Content { get; set; }

        //public string XmlData { get; set; }

        public string GetFeedCoverImage()
        {
            string imageUrl = string.Empty;
            HtmlDocument doc = new HtmlDocument();

            try
            {
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(Link ?? string.Empty);
                HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                string pageSource = string.Empty;

                if (response.StatusCode == HttpStatusCode.OK)
                {
                    Stream receiveStream = response.GetResponseStream();
                    StreamReader readStream;
                    if (string.IsNullOrWhiteSpace(response.CharacterSet))
                        readStream = new StreamReader(receiveStream);
                    else
                        readStream = new StreamReader(receiveStream, Encoding.GetEncoding(response.CharacterSet));

                    pageSource = readStream.ReadToEnd();

                    response.Close();
                    readStream.Close();
                }

                string metaImageRegexPattern = @"<meta[\s]+[^>]*?property[\s]?=[\s""']+og:image[\s""']+content[\s]?=[\s""']+(.*?)[""']+.*?>";
                var metaRegex = new Regex(metaImageRegexPattern, RegexOptions.IgnoreCase);
                var mDesc = metaRegex.Match(pageSource ?? string.Empty);
                if (mDesc.Success && mDesc.Groups.Count >= 2)
                {
                    imageUrl = mDesc.Groups[1]?.Value ?? string.Empty;
                }
            }
            catch { }

            try
            {
                if (string.IsNullOrWhiteSpace(imageUrl))
                {
                    string xpath = "//meta[@property='og:image']";
                    doc = new HtmlWeb().Load(Link ?? string.Empty);
                    var ogImage = doc.DocumentNode.SelectSingleNode(xpath);

                    imageUrl = ogImage?.Attributes["content"]?.Value?.ToString() ?? string.Empty;
                }
            }
            catch
            {

            }

            try
            {
                if (string.IsNullOrWhiteSpace(imageUrl))
                {
                    //string pattern = @"<img\s+[^>]*?src=('|')([^'']+)\1";
                    string pattern = "<img.+?src=[\"'](.+?)[\"'].*?>";
                    Regex myRegex = new Regex(pattern, RegexOptions.IgnoreCase);

                    // use Desc
                    if (!string.IsNullOrWhiteSpace(Description))
                    {
                        try
                        {
                            var mDesc = myRegex.Match(Description);

                            if (mDesc.Success && mDesc.Groups.Count >= 2)
                            {
                                imageUrl = mDesc.Groups[1]?.Value ?? string.Empty;
                            }
                        }
                        catch { }
                    }
                    else
                    {
                        // use Content
                        if (!string.IsNullOrWhiteSpace(Content))
                        {
                            try
                            {
                                Match mContent = myRegex.Match(Content);

                                if (mContent.Success && mContent.Groups.Count >= 2)
                                {
                                    imageUrl = mContent.Groups[1]?.Value ?? string.Empty;
                                }
                            }
                            catch { }
                        }
                        else
                        {
                            // last chance: full html
                            if (doc != null && !string.IsNullOrWhiteSpace(doc?.Text))
                            {
                                Match m = myRegex.Match(doc.Text);

                                if (m.Success && m.Groups.Count >= 2)
                                {
                                    imageUrl = m.Groups[1]?.Value ?? string.Empty;
                                }
                            }                            
                        }
                    }
                }
            }
            catch
            {

            }

            //if (!string.IsNullOrWhiteSpace(XmlData))
            //{
            //    try
            //    {
            //        Match m = myRegex.Match(XmlData);

            //        if (m.Success && m.Groups.Count >= 2)
            //        {
            //            var tmp = m.Groups[1]?.Value ?? string.Empty;
            //            if (!string.IsNullOrWhiteSpace(tmp))
            //            {
            //                return tmp;
            //            }
            //        }
            //    }
            //    catch { }
            //}

            if (!string.IsNullOrWhiteSpace(imageUrl))
            {
                if (!imageUrl.StartsWith("http"))
                {
                    Uri pageUri = new Uri(Link);
                    return $"{pageUri.Scheme + Uri.SchemeDelimiter + pageUri.Host + ":" + pageUri.Port}/{imageUrl.TrimStart('/')}";
                }
                else
                {
                    return imageUrl;
                }
            }

            return string.Empty;
        }
    }

    public interface IRssEngine
    {
        List<SimpleFeedlyFeedItem> GetItems(string feedUrl, out Exception error);
    }

    internal class CodeHollowFeedReaderEngine : IRssEngine
    {
        public List<SimpleFeedlyFeedItem> GetItems(string feedUrl, out Exception error)
        {
            Exception currentEx = null;
            List<SimpleFeedlyFeedItem> items = new List<SimpleFeedlyFeedItem>();

            try
            {
                var feed = CodeHollow.FeedReader.FeedReader.ReadAsync(feedUrl).GetAwaiter().GetResult();

                foreach (var item in feed.Items)
                {
                    var feedItem = new SimpleFeedlyFeedItem
                    {
                        Id = item.Id,
                        Title = string.IsNullOrWhiteSpace(item.Title) ? item.Link : item.Title,
                        Link = item.Link,
                        Description = item.Description,
                        PublishingDate = item.PublishingDate ?? DateTime.Now,
                        Author = item.Author,
                        Content = item.Content
                    };

                    items.Add(feedItem);
                }
            }
            catch (Exception ex)
            {
                currentEx = ex;
            }

            error = currentEx;
            return items;
        }
    }

    internal class SyndicationFeedEngine : IRssEngine
    {
        public List<SimpleFeedlyFeedItem> GetItems(string feedUrl, out Exception error)
        {
            Exception currentEx = null;
            List<SimpleFeedlyFeedItem> items = new List<SimpleFeedlyFeedItem>();
            XmlReaderSettings settings = new XmlReaderSettings();
            settings.DtdProcessing = DtdProcessing.Parse;

            try
            {
                using (var reader = XmlReader.Create(feedUrl, settings))
                {
                    var feed = System.ServiceModel.Syndication.SyndicationFeed.Load(reader);
                    reader.Close();

                    foreach (System.ServiceModel.Syndication.SyndicationItem item in feed.Items)
                    {
                        var feedItem = new SimpleFeedlyFeedItem();

                        var link = item.Links.FirstOrDefault()?.Uri.ToString();
                        link = string.IsNullOrWhiteSpace(link) ? item.Id : link;

                        feedItem.Id = item.Id;
                        feedItem.Title = string.IsNullOrWhiteSpace(item.Title?.Text) ? link : item.Title.Text;
                        feedItem.Link = link;
                        feedItem.Description = item.Summary?.Text;
                        feedItem.PublishingDate = item.PublishDate.UtcDateTime;
                        feedItem.Author = item.Authors.FirstOrDefault()?.Name ?? string.Empty;
                        feedItem.Content = item.Content?.ToString();

                        //feedItem.XmlData = item.GetRss20Formatter().ToString();

                        items.Add(feedItem);
                    }
                }
            }
            catch (Exception ex)
            {
                currentEx = ex;
            }

            error = currentEx;
            return items;
        }
    }

    internal class ParseRssByXmlEngine : IRssEngine
    {
        public List<SimpleFeedlyFeedItem> GetItems(string feedUrl, out Exception error)
        {
            Exception currentEx = null;
            List<SimpleFeedlyFeedItem> items = new List<SimpleFeedlyFeedItem>();

            try
            {
                var xmlString = string.Empty;
                using (WebClient client = new WebClient())
                {
                    var htmlData = client.DownloadData(feedUrl);
                    xmlString = System.Text.Encoding.UTF8.GetString(htmlData);

                    // ReplaceHexadecimalSymbols
                    string r = "[\x00-\x08\x0B\x0C\x0E-\x1F\x26]";
                    xmlString = Regex.Replace(xmlString, r, "", RegexOptions.Compiled);
                }

                XmlDocument rssXmlDoc = new XmlDocument();
                rssXmlDoc.LoadXml(xmlString);

                // Parse the Items in the RSS file
                XmlNodeList rssNodes = rssXmlDoc.SelectNodes("rss/channel/item");

                var namespaceManager = new XmlNamespaceManager(rssXmlDoc.NameTable);
                var contentNamespace = rssXmlDoc.DocumentElement.GetAttribute("xmlns:content");
                namespaceManager.AddNamespace("content", contentNamespace);

                // Iterate through the items in the RSS file
                foreach (XmlNode rssNode in rssNodes)
                {
                    var feedItem = new SimpleFeedlyFeedItem();

                    XmlNode rssSubNode = rssNode.SelectSingleNode("link");
                    feedItem.Link = rssSubNode != null ? rssSubNode.InnerText : null;

                    rssSubNode = rssNode.SelectSingleNode("title");
                    feedItem.Title = rssSubNode != null ? rssSubNode.InnerText : null;
                    feedItem.Title = string.IsNullOrWhiteSpace(feedItem.Title) ? feedItem.Link : feedItem.Title;

                    rssSubNode = rssNode.SelectSingleNode("description");
                    feedItem.Description = rssSubNode != null ? rssSubNode.InnerText : null;

                    rssSubNode = rssNode.SelectSingleNode("//content:encoded", namespaceManager);
                    feedItem.Content = rssSubNode != null ? rssSubNode.InnerText : null;

                    rssSubNode = rssNode.SelectSingleNode("pubDate");
                    DateTime pubDate = DateTime.Now;

                    if (rssSubNode != null)
                    {
                        if (DateTime.TryParse(rssSubNode.InnerText, out DateTime tmpDate))
                        {
                            pubDate = tmpDate;
                        }
                    }

                    feedItem.PublishingDate = pubDate;


                    //feedItem.XmlData = rssNode.InnerXml.ToString();

                    if (!string.IsNullOrWhiteSpace(feedItem.Link))
                    {
                        items.Add(feedItem);
                    }
                }
            }
            catch (Exception ex)
            {
                currentEx = ex;
            }

            error = currentEx;
            return items;
        }
    }
}