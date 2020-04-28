using Dapper;
using SimpleFeedly.Collections;
using SimpleFeedly.Models;
using SimpleFeedly.Rss;
using SimpleFeedly.Rss.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

namespace SimpleFeedly
{
    public class DatabaseAccessSettings
    {
        public DatabaseAccessSettings(string connectionString, int timeout)
        {
            ConnectionString = connectionString;
            ConnectionTimeout = timeout;
        }

        public string ConnectionString { get; private set; }
        public int ConnectionTimeout { get; private set; }
    }

    public class SimpleFeedlyDatabaseAccess
    {
        public static DatabaseAccessSettings Settings;

        public void Setup(Func<DatabaseAccessSettings> buildSettingFunc)
        {
            Settings = buildSettingFunc();
        }

        public static bool CheckExistFeedItem(string channelDomainOrLink, string feedItemKey)
        {
            if (string.IsNullOrWhiteSpace(channelDomainOrLink))
            {
                return true;
            }

            using (var con = new SqlConnection(Settings.ConnectionString))
            {
                var parm = new DynamicParameters();
                parm.Add("@channelDomainGroup", channelDomainOrLink);
                parm.Add("@feedItemKey", feedItemKey);

                var result = (int?)con.ExecuteScalar("CheckExistFeedItem", parm, commandType: CommandType.StoredProcedure, commandTimeout: 30);
                if ((result ?? 0) > 0)
                {
                    return true;
                }
                return false;
            }
        }

        public static List<RssChannelsRow> GetChannels()
        {
            var result = new List<RssChannelsRow>();

            using (var con = new SqlConnection(Settings.ConnectionString))
            {
                using (var dr = con.ExecuteReader("GetAllChannels", null, commandType: CommandType.StoredProcedure, commandTimeout: 30))
                {
                    while (dr.Read())
                    {
                        var item = new RssChannelsRow
                        {
                            Id = dr["Id"] == DBNull.Value ? 0 : long.Parse(dr["Id"].ToString()),

                            Title = dr["Title"] == DBNull.Value ? string.Empty : dr["Title"]?.ToString() ?? string.Empty,
                            Link = dr["Link"] == DBNull.Value ? string.Empty : dr["Link"]?.ToString() ?? string.Empty,
                            DomainGroup = dr["DomainGroup"] == DBNull.Value ? string.Empty : dr["DomainGroup"]?.ToString() ?? string.Empty,
                            Description = dr["Description"] == DBNull.Value ? string.Empty : dr["Description"]?.ToString() ?? string.Empty,
                            Language = dr["Language"] == DBNull.Value ? string.Empty : dr["Language"]?.ToString() ?? string.Empty,
                            Copyright = dr["Copyright"] == DBNull.Value ? string.Empty : dr["Copyright"]?.ToString() ?? string.Empty,
                            ImageUrl = dr["ImageUrl"] == DBNull.Value ? string.Empty : dr["ImageUrl"]?.ToString() ?? string.Empty,
                            OriginalDocument = dr["OriginalDocument"] == DBNull.Value ? string.Empty : dr["OriginalDocument"]?.ToString() ?? string.Empty,
                        };

                        if (dr["RssCrawlerEngine"] != DBNull.Value && !string.IsNullOrWhiteSpace(dr["RssCrawlerEngine"].ToString()))
                        {
                            item.RssCrawlerEngine = (RssCrawlerEngine)int.Parse(dr["RssCrawlerEngine"].ToString());
                        }
                        else
                        {
                            item.RssCrawlerEngine = null;
                        }

                        if (dr["Type"] != DBNull.Value)
                        {
                            item.Type = int.Parse(dr["Type"].ToString());
                        }

                        if (DateTime.TryParse(dr["LastUpdatedDate"].ToString(), out DateTime tmpLastUpdatedDate))
                        {
                            item.LastUpdatedDate = tmpLastUpdatedDate;
                        }

                        result.Add(item);
                    }
                }
            }

            return result;
        }

        public static List<RssChannelsRow> GetActiveChannels()
        {
            var result = new List<RssChannelsRow>();

            using (var con = new SqlConnection(Settings.ConnectionString))
            {
                using (var dr = con.ExecuteReader("GetActiveChannels", null, commandType: CommandType.StoredProcedure, commandTimeout: 30))
                {
                    while (dr.Read())
                    {
                        var item = new RssChannelsRow
                        {
                            Id = long.Parse(dr["Id"].ToString()),

                            Title = dr["Title"] == DBNull.Value ? string.Empty : dr["Title"]?.ToString() ?? string.Empty,
                            DomainGroup = dr["DomainGroup"] == DBNull.Value ? string.Empty : dr["DomainGroup"]?.ToString() ?? string.Empty,
                            Link = dr["Link"] == DBNull.Value ? string.Empty : dr["Link"]?.ToString() ?? string.Empty,
                            Description = dr["Description"] == DBNull.Value ? string.Empty : dr["Description"]?.ToString() ?? string.Empty,
                            Language = dr["Language"] == DBNull.Value ? string.Empty : dr["Language"]?.ToString() ?? string.Empty,
                            Copyright = dr["Copyright"] == DBNull.Value ? string.Empty : dr["Copyright"]?.ToString() ?? string.Empty,
                            ImageUrl = dr["ImageUrl"] == DBNull.Value ? string.Empty : dr["ImageUrl"]?.ToString() ?? string.Empty,
                            OriginalDocument = dr["OriginalDocument"] == DBNull.Value ? string.Empty : dr["OriginalDocument"]?.ToString() ?? string.Empty,
                            RefreshTimeMinutes = dr["RefreshTimeMinutes"] == DBNull.Value ? null : (int?)int.Parse(dr["RefreshTimeMinutes"].ToString())
                        };

                        if (item.RefreshTimeMinutes != null && item.RefreshTimeMinutes  <= 0)
                        {
                            item.RefreshTimeMinutes = null;
                        }

                        if (dr["RssCrawlerEngine"] != DBNull.Value && !string.IsNullOrWhiteSpace(dr["RssCrawlerEngine"].ToString()))
                        {
                            item.RssCrawlerEngine = (RssCrawlerEngine)int.Parse(dr["RssCrawlerEngine"].ToString());
                        }
                        else
                        {
                            item.RssCrawlerEngine = null;
                        }

                        if (dr["Type"] != DBNull.Value)
                        {
                            item.Type = int.Parse(dr["Type"].ToString());
                        }

                        if (DateTime.TryParse(dr["LastUpdatedDate"].ToString(), out DateTime tmpLastUpdatedDate))
                        {
                            item.LastUpdatedDate = tmpLastUpdatedDate;
                        }

                        result.Add(item);
                    }
                }
            }

            return result;
        }

        public static void InsertFeedItem(RssFeedItemsRow item)
        {
            using (var con = new SqlConnection(Settings.ConnectionString))
            {
                var parms = new DynamicParameters();
                parms.Add("@channelId", item.ChannelId);
                parms.Add("@channelDomainGroup", string.IsNullOrEmpty(item.RssChannelDomainGroup) ? item.Link : item.RssChannelDomainGroup);
                parms.Add("@feedItemKey", item.FeedItemKey);
                parms.Add("@title", item.Title);
                parms.Add("@link", item.Link);
                parms.Add("@description", item.Description);
                parms.Add("@publishingDate", item.PublishingDate == null || item.PublishingDate == DateTime.MinValue ? DateTime.Now : item.PublishingDate);
                parms.Add("@author", item.Author);
                parms.Add("@content", item.Content);
                parms.Add("@coverImageUrl", item.CoverImageUrl);
                parms.Add("@xmlData", item.XmlData);

                con.Execute("InsertFeedItem", parms, commandType: CommandType.StoredProcedure, commandTimeout: 30);
            }
        }

        public static void MarkCheckedFeedItem(long id, bool isChecked)
        {
            using (var con = new SqlConnection(Settings.ConnectionString))
            {
                var parms = new DynamicParameters();
                parms.Add("@feedItemId", id);
                parms.Add("@isChecked", isChecked);

                con.Execute("MarkCheckedFeedItem", parms, commandType: CommandType.StoredProcedure, commandTimeout: 30);
            }
        }

        public static void UpdateChannelErrorStatus(long channelId, bool isError, string errorMessage)
        {
            if (channelId <= 0)
            {
                return;
            }

            using (var con = new SqlConnection(Settings.ConnectionString))
            {
                var parms = new DynamicParameters();
                parms.Add("@channelId", channelId);
                parms.Add("@isError", isError);
                parms.Add("@errorMessage", errorMessage);

                con.Execute("UpdateChannelErrorStatus", parms, commandType: CommandType.StoredProcedure, commandTimeout: 30);
            }
        }

        public static void MarkCheckedFeedItems(List<long> ids, bool isChecked)
        {            
            using (var con = new SqlConnection(Settings.ConnectionString))
            {
                var data = new ListBigIntNumbersCollection();
                if (ids.Any())
                {
                    data.AddRange(ids);
                }

                var parm = new DynamicParameters();
                parm.Add("@isChecked", isChecked);
                if (data.Count > 0)
                {
                    parm.Add("@ids", data.AsTableValuedParameter());
                }

                con.Execute(
                        "MarkCheckedFeedItems",
                        parm,
                        commandType: CommandType.StoredProcedure,
                        commandTimeout: Settings.ConnectionTimeout);
            }
        }

        public static void UpdateChannelDefaultEngine(long channelId, RssCrawlerEngine? engine)
        {
            using (var con = new SqlConnection(Settings.ConnectionString))
            {
                var parms = new DynamicParameters();
                parms.Add("@channelId", channelId);
                parms.Add("@engine", engine);

                con.Execute("UpdateChannelDefaultEngine", parms, commandType: CommandType.StoredProcedure, commandTimeout: 30);
            }
        }

        public static void AddBlacklistItem(long feedItemId, string title, bool isDeleteFeedItem)
        {
            using (var con = new SqlConnection(Settings.ConnectionString))
            {
                var parms = new DynamicParameters();
                parms.Add("@feedItemId", feedItemId);
                parms.Add("@title", title);
                parms.Add("@isDeleteFeedItem", isDeleteFeedItem);

                con.Execute("AddBlacklistItem", parms, commandType: CommandType.StoredProcedure, commandTimeout: 30);
            }
        }

        public static void AddBlacklistItems(List<BlacklistItem> items, bool isDeleteFeedItem)
        {
            using (var con = new SqlConnection(Settings.ConnectionString))
            {
                var data = new BlacklistItemsCollection();
                if (items.Any())
                {
                    data.AddRange(items
                        .Where(x => x.FeedItemId > 0 && !string.IsNullOrWhiteSpace(x.Title))
                        .Select(x => new BlacklistItem(x.FeedItemId, x.Title)));
                }

                var parm = new DynamicParameters();
                parm.Add("@isDeleteFeedItem", isDeleteFeedItem);

                if (data.Count > 0)
                {
                    parm.Add("@blacklist", data.AsTableValuedParameter());
                }

                con.Execute(
                        "AddBlacklistItems",
                        parm,
                        commandType: CommandType.StoredProcedure,
                        commandTimeout: Settings.ConnectionTimeout);
            }
        }

        public static void CleanupFeedItemsData()
        {
            using (var con = new SqlConnection(Settings.ConnectionString))
            {
                con.Execute(
                        "CleanupFeedItemsData",
                        null,
                        commandType: CommandType.StoredProcedure,
                        commandTimeout: Settings.ConnectionTimeout);
            }
        }
    }
}
