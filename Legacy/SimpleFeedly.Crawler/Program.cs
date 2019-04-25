using SimpleFeedly.Core;
using StackExchange.Exceptional;
using Topshelf;

namespace SimpleFeedly.Crawler
{
    class Program
    {
        static void Main(string[] args)
        {
            // init settings
            new AppSettings().Init();

            ErrorStore.Setup(ShareConstants.ExceptionHanlderAppName, new StackExchange.Exceptional.Stores.SQLErrorStore(AppSettings.Base.SimpleFeedlyConnBuilder.ConnectionString));

            // setup DatabaseAccess helper
            new SimpleFeedlyDatabaseAccess().Setup(() =>
            {
                return new DatabaseAccessSettings(
                    connectionString: AppSettings.Base.SimpleFeedlyConnBuilder.ConnectionString,
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
}
