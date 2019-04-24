using CodeHollow.FeedReader;
using Newtonsoft.Json;
using NLog;
using SimpleFeedly.Rss.Entities;
using StackExchange.Exceptional;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Caching;
using System.Threading.Tasks;

namespace SimpleFeedly.Crawler
{
    class CrawlerService
    {
        private static readonly ILogger _logger = LogManager.GetLogger(nameof(CrawlerService), typeof(CrawlerService));
        private static HashSet<string> _feedCache = new HashSet<string>();
        private static int _currentDate = DateTime.Now.Day;
        private static readonly Random _ran = new Random();

        public void Start()
        {
            try
            {
                _logger.Info("Initializing container");

                Task.Run(() => Work());
            }
            catch (Exception ex)
            {
                _logger.Error(ex, $"An error occurred while starting SimpleFeedly.Crawler: {ex.Message}");
            }
        }

        public void Stop()
        {
            try
            {
                _logger.Error("Service was stopped");
            }
            catch (Exception ex)
            {
                _logger.Error(ex, $"An error occurred while stopping SimpleFeedly.Crawler: {ex.Message}");
            }
        }

        public void Work()
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
                                var feed = FeedReader.ReadAsync(channel.Link).GetAwaiter().GetResult();
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
                                                PublishingDate = fItem.PublishingDate ?? DateTime.Now,
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
                            catch (Exception err)
                            {
                                SimpleFeedlyDatabaseAccess.UpdateChannelErrorStatus((long)channel.Id, true, JsonConvert.SerializeObject(err));

                                cache.Add(channelSleepingCacheKey, true, DateTime.Now.Add(AppSettings.Base.ChannelErrorDelay));
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

                    System.Threading.Thread.Sleep(AppSettings.Base.ErrorDelay);
                }

                _currentDate = DateTime.Now.Day;

                // we should delay a little bit, some seconds maybe
                System.Threading.Thread.Sleep(AppSettings.Base.LoopDelay);
            }
        }

        private static string GenerateFeedItemId(FeedItem item)
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
            var min = AppSettings.Base.ChannelFetchingDelay.Start.TotalMinutes;
            var max = AppSettings.Base.ChannelFetchingDelay.End.TotalMinutes;

            Random random = new Random();
            var ranMinutes = random.NextDouble() * (max - min) + min;

            return TimeSpan.FromMinutes(ranMinutes);
        }
    }
}
