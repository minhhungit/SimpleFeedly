namespace SimpleFeedly
{
    using Newtonsoft.Json;
    using NLog;
    using SimpleFeedly.Rss.Entities;
    using StackExchange.Exceptional;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Runtime.Caching;
    using System.Web;

    public static partial class SiteInitialization
    {
        private static readonly ILogger _logger = LogManager.GetLogger("CrawlerService", typeof(SiteInitialization));
        private static HashSet<string> _feedCache = new HashSet<string>();
        private static int _currentDate = DateTime.Now.Day;
        private static readonly Random _ran = new Random();

        private static void InitializeRssCrawler()
        {
            System.Threading.Tasks.Task.Run(() => 
            {
                ObjectCache cache = MemoryCache.Default;
                const string LIST_CHANNEL_CACHE_KEY = "cache_list_of_channels";

                while (true)
                {
                    if (_currentDate != DateTime.Now.Day)
                    {
                        _feedCache = new HashSet<string>();
                        _currentDate = DateTime.Now.Day;
                    }

                    try
                    {
                        List<RssChannelsRow> channels = null;
                        var chanelsCached = cache[LIST_CHANNEL_CACHE_KEY] as List<RssChannelsRow>;
                        if (chanelsCached != null)
                        {
                            channels = chanelsCached;
                        }
                        else
                        {
                            channels = SimpleFeedlyDatabaseAccess.GetAllChannels().OrderBy(x => x.Id).ToList();
                            cache.Add(LIST_CHANNEL_CACHE_KEY, channels, DateTime.Now.Add(new TimeSpan(0, 1, 0))); // not really need to cache list of channels
                        }

                        var count = 0;

                        foreach (var channel in channels)
                        {
                            count++;
                            _logger.Info($"- [{count}/{channels.Count}] Working on channel: {channel.Id} | {channel.Link}");

                            if (string.IsNullOrWhiteSpace(channel.Link))
                            {
                                _logger.Warn($"=> Channel has empty link: {channel.Id}");
                                continue;
                            }

                            var channelSleepingCacheKey = "channel_is_sleeping|" + channel.Id;

                            var isSleeping = cache[channelSleepingCacheKey] as bool?;
                            if (isSleeping == null || isSleeping == false)
                            {
                                try
                                {
                                    RssFeedEngine usedEngine = RssFeedEngine.CodeHollowFeedReader;
                                    Exception fetchFeedError = null;
                                    var feed = GetFeedsFromChannel(channel.Link, out usedEngine, out fetchFeedError);

                                    if (feed != null)
                                    {
                                        _logger.Info($"  + Number of items: {feed.Items.Count}");

                                        var hasNew = false;
                                        foreach (var fItem in feed.Items)
                                        {
                                            var feedItemId = GenerateFeedItemId(fItem);
                                            var feedCacheKey = GenerateFeedCacheKey((long)channel.Id, feedItemId);

                                            if (string.IsNullOrWhiteSpace(feedItemId) || string.IsNullOrWhiteSpace(fItem.Link))
                                            {
                                                _logger.Info($"  + Skipped item: {JsonConvert.SerializeObject(fItem)}");
                                                continue;
                                            }

                                            if (!_feedCache.Contains(feedCacheKey))
                                            {
                                                if (!SimpleFeedlyDatabaseAccess.CheckExistFeedItem((long)channel.Id, feedItemId))
                                                {
                                                    var feedItem = new RssFeedItemsRow
                                                    {
                                                        ChannelId = channel.Id,
                                                        FeedItemId = feedItemId,
                                                        Title = string.IsNullOrWhiteSpace(fItem.Title) ? fItem.Link : fItem.Title,
                                                        Link = fItem.Link,
                                                        Description = fItem.Description,
                                                        PublishingDate = fItem.PublishingDate,
                                                        Author = fItem.Author,
                                                        Content = fItem.Content
                                                    };

                                                    SimpleFeedlyDatabaseAccess.InsertFeedItem(feedItem);

                                                    hasNew = true;
                                                }

                                                _feedCache.Add(feedCacheKey);
                                            }
                                        }

                                        SimpleFeedlyDatabaseAccess.UpdateChannelErrorStatus((long)channel.Id, false, null);

                                        if (!hasNew)
                                        {
                                            var randomExpiryTime =
                                            cache.Add(channelSleepingCacheKey, true, DateTime.Now.Add(GenerateChannelSleepTime()));
                                        }
                                    }
                                    else
                                    {
                                        SimpleFeedlyDatabaseAccess.UpdateChannelErrorStatus((long)channel.Id, true, fetchFeedError == null ? null : JsonConvert.SerializeObject(fetchFeedError));
                                    }
                                }
                                catch (Exception err)
                                {
                                    SimpleFeedlyDatabaseAccess.UpdateChannelErrorStatus((long)channel.Id, true, JsonConvert.SerializeObject(err));

                                    cache.Add(channelSleepingCacheKey, true, DateTime.Now.Add(AppSettings.Crawler.ChannelErrorDelay));
                                    _logger.Error(err, $"An error occurred on channel: {channel.Id} | {channel.Link}");

                                    ErrorHandle(err);
                                }
                            }
                            else
                            {
                                _logger.Info($"  + sleeping...");
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        _logger.Error(ex, "An error occurred");

                        ErrorHandle(ex);

                        System.Threading.Thread.Sleep(AppSettings.Crawler.ErrorDelay);
                    }

                    _currentDate = DateTime.Now.Day;

                    // we should delay a little bit, some seconds maybe
                    System.Threading.Thread.Sleep(AppSettings.Crawler.LoopDelay);
                }
            });
        }

        private static string GenerateFeedItemId(SimpleFeedlyFeedItem item)
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

        private static string GenerateFeedCacheKey(long channelId, string feedItemId)
        {
            return Core.Utils.StringUtils.MD5Hash($"{channelId}>{feedItemId}");
        }

        private static void ErrorHandle(Exception ex)
        {
            // we can send an email for warning right here if needed

            // or just log error into some error stores, it's up to you
            ErrorStore.LogExceptionWithoutContext(ex);
        }

        private static TimeSpan GenerateChannelSleepTime()
        {
            var min = AppSettings.Crawler.ChannelFetchingDelay.Start.TotalMinutes;
            var max = AppSettings.Crawler.ChannelFetchingDelay.End.TotalMinutes;

            Random random = new Random();
            var ranMinutes = random.NextDouble() * (max - min) + min;

            return TimeSpan.FromMinutes(ranMinutes);
        }

        public static SimpleFeedlyFeed GetFeedsFromChannel(string channelUrl, out RssFeedEngine engine, out Exception error)
        {
            error = null;
            engine = RssFeedEngine.CodeHollowFeedReader;
            SimpleFeedlyFeed result = new SimpleFeedlyFeed();
            var items = new List<SimpleFeedlyFeedItem>();

            var status = false;

            // using CodeHollow.FeedReader
            if (!status)
            {
                try
                {
                    var feed = CodeHollow.FeedReader.FeedReader.ReadAsync(channelUrl).GetAwaiter().GetResult();

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

                    engine = RssFeedEngine.CodeHollowFeedReader;
                    status = true;
                }
                catch (Exception ex) {
                    error = ex;
                    ErrorStore.LogException(ex, HttpContext.Current, false, false,
                                       new Dictionary<string, string>
                                       {
                                           {"channelId",channelUrl },
                                           { "engine", nameof(RssFeedEngine.CodeHollowFeedReader)}
                                       });
                }
            }

            // using SyndicationFeed
            if (!status)
            {
                try
                {
                    using (var reader = System.Xml.XmlReader.Create(channelUrl))
                    {
                        var feed = System.ServiceModel.Syndication.SyndicationFeed.Load(reader);
                        reader.Close();

                        foreach (System.ServiceModel.Syndication.SyndicationItem item in feed.Items)
                        {
                            var feedItem = new SimpleFeedlyFeedItem();

                            var link = item.Links.FirstOrDefault()?.Uri.ToString();

                            feedItem.Id = item.Id;
                            feedItem.Title = item.Title.Text;
                            feedItem.Link = string.IsNullOrWhiteSpace(link) ? item.Id : link;
                            feedItem.Description = item.Summary.Text;
                            feedItem.PublishingDate = item.PublishDate.UtcDateTime;
                            feedItem.Author = item.Authors.FirstOrDefault()?.Name ?? string.Empty;
                            feedItem.Content = item.Content.ToString();

                            items.Add(feedItem);
                        }
                    }

                    engine = RssFeedEngine.SyndicationFeed;
                    status = true;
                }
                catch (Exception ex)
                {
                    error = ex;
                    ErrorStore.LogException(ex, HttpContext.Current, false, false,
                                       new Dictionary<string, string>
                                       {
                                           { "channelId",channelUrl },
                                           { "engine", nameof(RssFeedEngine.SyndicationFeed)}
                                       });
                }
            }

            if (!status)
            {
                return null;
            }
            else
            {
                result.Items = items;
                return result;
            }            
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
    }

    public enum RssFeedEngine
    {
        SyndicationFeed = 1,
        CodeHollowFeedReader = 2
    }
}