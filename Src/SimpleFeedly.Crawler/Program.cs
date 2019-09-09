using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Microsoft.Owin.Hosting;
using NLog;
using Owin;
using SimpleFeedly.Core;
using StackExchange.Exceptional;
using System;
using System.Threading.Tasks;
using System.Web.Cors;
using Topshelf;

[assembly: OwinStartup("SimpleFeedly.Crawler.Startup", typeof(SimpleFeedly.Crawler.CrawlerStartup))]
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

                WebApp.Start<CrawlerStartup>(AppSettings.Base.CrawlerSignalrSelfhostUrl);

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

    class CrawlerStartup
    {
        public void Configuration(IAppBuilder app)
        {
            if (!string.IsNullOrWhiteSpace(AppSettings.Base.SimpleFeedlyWebAppUrls))
            {
                var urls = AppSettings.Base.SimpleFeedlyWebAppUrls.Split(',');

                var policy = new CorsPolicy()
                {
                    AllowAnyHeader = true,
                    AllowAnyMethod = true,
                    SupportsCredentials = true
                };

                foreach (var url in urls)
                {
                    //be sure to include the port:
                    //example: "http://localhost:8081"
                    policy.Origins.Add(url.Trim());
                }

                app.UseCors(new CorsOptions
                {
                    PolicyProvider = new CorsPolicyProvider
                    {
                        PolicyResolver = context => Task.FromResult(policy)
                    }
                });

                //app.UseCors(CorsOptions.AllowAll);
            }

            app.MapSignalR(new Microsoft.AspNet.SignalR.HubConfiguration {
                //EnableDetailedErrors = true
            });
        }
    }
}
