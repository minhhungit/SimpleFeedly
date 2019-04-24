using Dapper;
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

        public static bool CheckExistFeedItem(long channelId, string feedItemId)
        {
            if (channelId <= 0)
            {
                return true;
            }

            using (var con = new SqlConnection(Settings.ConnectionString))
            {
                var parm = new DynamicParameters();
                parm.Add("@channelId", channelId);
                parm.Add("@feedItemId", feedItemId);

                var result = (int?)con.ExecuteScalar("CheckExistFeedItem", parm, commandType: CommandType.StoredProcedure, commandTimeout: 30);
                if ((result ?? 0) > 0)
                {
                    return true;
                }
                return false;
            }
        }

        public static List<RssChannelsRow> GetAllChannels()
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
                            Id = long.Parse(dr["Id"].ToString()),

                            Title = dr["Title"].ToString(),
                            Link = dr["Link"].ToString(),
                            Description = dr["Description"].ToString(),
                            Language = dr["Language"].ToString(),
                            Copyright = dr["Copyright"].ToString(),
                            ImageUrl = dr["ImageUrl"].ToString(),
                            OriginalDocument = dr["OriginalDocument"].ToString()
                        };

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
                parms.Add("@feedItemId", item.FeedItemId);
                parms.Add("@title", item.Title);
                parms.Add("@link", item.Link);
                parms.Add("@description", item.Description);
                parms.Add("@publishingDate", item.PublishingDate);
                parms.Add("@author", item.Author);
                parms.Add("@content", item.Content);

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
    }
}
