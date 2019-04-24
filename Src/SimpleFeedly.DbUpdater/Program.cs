using Common.Logging;
using DatabaseMigrateExt;
using Fclp;
using System.Linq;

namespace SimpleFeedly.DbUpdater
{
    class Program
    {
        public class ApplicationArguments
        {
            public bool ForceApplyScripts { get; set; }
            //public List<string> Databases { get; set; }
        }

        private static readonly ILog Logger = LogManager.GetLogger(typeof(ExtMigrationRunner));

        private static void Main(string[] args)
        {
            Logger.Info(ApplicationConstants.AppName);

            var p = new FluentCommandLineParser<ApplicationArguments>();

            p.SetupHelp("?", "help").Callback(text => System.Console.WriteLine(text));
            p.Setup(arg => arg.ForceApplyScripts).As('f', "force").SetDefault(false);
            // p.Setup(arg => arg.Databases).As('d', "db").SetDefault(new List<string> { "W", "R", "L" });

            var result = p.Parse(args);

            if (result.EmptyArgs)
            {
                for (int i = 0; i < 3; i++)
                {
                    System.Threading.Thread.Sleep(1000);
                    Logger.Info(string.Join("", Enumerable.Repeat(".", (i + 1)).ToList()));
                }
            }

            if (!result.HasErrors && !result.HelpCalled)
            {
                ExtMigrationRunner.Initialize().Process(p.Object.ForceApplyScripts);
            }

            Logger.Info("Done!");

            if (result.EmptyArgs)
            {
                System.Threading.Thread.Sleep(3000);
            }
        }
    }

    public static class ApplicationConstants
    {
        public const string AppName = @"
  ____   _      _   _           _       _            
 |  _ \ | |__  | | | |_ __   __| | __ _| |_ ___ _ __ 
 | | | || '_ \ | | | | '_ \ / _` |/ _` | __/ _ \ '__|
 | |_| || |_) || |_| | |_) | (_| | (_| | ||  __/ |   
 |____/ |_.__/  \___/| .__/ \__,_|\__,_|\__\___|_|   
                     |_|                             ";
    }
}
