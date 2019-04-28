using NLog;
using SimpleFeedly.Core;
using StackExchange.Exceptional;
using System;
using System.Threading.Tasks;
using Topshelf;

namespace SimpleFeedly.Crawler
{
    class Program
    {
        static void Main(string[] args)
        {
            // init settings
            new AppSettings().Init();

            ErrorStore.Setup(ShareConstants.ExceptionHanlderAppName, new StackExchange.Exceptional.Stores.SQLErrorStore(AppSettings.Base.Connections.SimpleFeedly.ConnectionString));

            // setup DatabaseAccess helper
            new SimpleFeedlyDatabaseAccess().Setup(() =>
            {
                return new DatabaseAccessSettings(
                    connectionString: AppSettings.Base.Connections.SimpleFeedly.ConnectionString,
                    timeout: 200
                );
            });

            HostFactory.Run(config =>
            {
                config.UseNLog();

                config.Service<CrawlerService>(s =>
                {
                    s.ConstructUsing(name => new CrawlerService());
                    s.WhenStarted(service => service.Start());
                    s.WhenStopped(service => service.Stop());
                });

                //Setup Account that window service use to run.  
                config.RunAsLocalSystem();

                config.SetServiceName("SimpleFeedly.Crawler");
                config.SetDisplayName("SimpleFeedly Crawler");
                config.SetDescription("SimpleFeedly Crawler");
            });
        }
    }

    class CrawlerService
    {
        private static readonly ILogger _logger = LogManager.GetLogger(nameof(CrawlerService), typeof(CrawlerService));

        public void Start()
        {
            try
            {
                _logger.Info("Initializing container");

                Task.Run(() => SiteInitialization.InitializeRssCrawler(_logger, AppSettings.Base.ChannelFetchingDelay, AppSettings.Base.ChannelErrorDelay, AppSettings.Base.ErrorDelay, AppSettings.Base.LoopDelay));
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
    }
}
