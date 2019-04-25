namespace SimpleFeedly
{
    using AppCfg;

    public static partial class SiteInitialization
    {
        private static void InitializeAppCfg()
        {
            MyAppCfg.TypeParsers.Register(new TimeToRunParser());
            MyAppCfg.TypeParsers.Register(new RandomTimeSpanParser());

            new AppSettings().Init();
        }        
    }

    public class AppSettings
    {
        public void Init()
        {
            Crawler = MyAppCfg.Get<ICrawlerSettings>();
            Connections = MyAppCfg.Get<IConnectionStringSettings>();
        }

        public static ICrawlerSettings Crawler { get; private set; }
        public static IConnectionStringSettings Connections { get; set; }
    }
}