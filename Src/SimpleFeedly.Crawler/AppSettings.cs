using AppCfg;
using System;
using System.Data.SqlClient;

namespace SimpleFeedly.Crawler
{
    public interface ICrawlerSettings
    {
        TimeToRunItem[] TimeToRun { get; }
        RandomTimeSpan ChannelFetchingDelay { get; }

        TimeSpan ChannelErrorDelay { get; }
        TimeSpan ErrorDelay { get; }
        TimeSpan LoopDelay { get; }

        [Option(Alias = "SimpleFeedlyConn")]
        SqlConnectionStringBuilder SimpleFeedlyConnBuilder { get; }
    }

    public partial class AppSettings
    {
        public void Init()
        {
            //  register custom setting parsers
            MyAppCfg.TypeParsers.Register(new TimeToRunParser());
            MyAppCfg.TypeParsers.Register(new RandomTimeSpanParser());

            Base = MyAppCfg.Get<ICrawlerSettings>();
        }

        public static ICrawlerSettings Base;
    }
}
