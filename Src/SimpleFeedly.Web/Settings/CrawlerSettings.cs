using AppCfg;
using System;

namespace SimpleFeedly
{
    public interface ICrawlerSettings
    {
        [Option(Alias = "CrawlerChannelFetchingDelay")]
        RandomTimeSpan ChannelFetchingDelay { get; }

        [Option(Alias = "CrawlerChannelErrorDelay")]
        TimeSpan ChannelErrorDelay { get; }

        [Option(Alias = "CrawlerErrorDelay")]
        TimeSpan ErrorDelay { get; }

        [Option(Alias = "CrawlerLoopDelay")]
        TimeSpan LoopDelay { get; }
    }
}
