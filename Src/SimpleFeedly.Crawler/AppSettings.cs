using AppCfg;
using SimpleFeedly.SettingParsers;
using System;
using System.Data.SqlClient;

namespace SimpleFeedly.Crawler
{
    public interface ISettings
    {
        RandomTimeSpan ChannelFetchingDelay { get; }

        TimeSpan ChannelErrorDelay { get; }
        TimeSpan ErrorDelay { get; }
        TimeSpan LoopDelay { get; }

        [Option(DefaultValue = 1)]
        int NbrOfWorker { get; }

        string CrawlerSignalrSelfhostUrl { get; set; }
        string SimpleFeedlyWebAppUrls { get; set; }

        IConnectionSettings Connections { get; }
    }

    public interface IConnectionSettings
    {
        [Option(Alias = "SimpleFeedlyConn")]
        SqlConnectionStringBuilder SimpleFeedly { get; }
    }

    public partial class AppSettings
    {
        public void Init()
        {
            //  register custom setting parsers
            MyAppCfg.TypeParsers.Register(new TimeToRunParser());
            MyAppCfg.TypeParsers.Register(new RandomTimeSpanParser());

            Base = MyAppCfg.Get<ISettings>();
        }

        public static ISettings Base;
    }
}
