namespace SimpleFeedly
{
    using AppCfg;
    using SimpleFeedly.Settings;

    public static partial class SiteInitialization
    {
        private static void InitializeAppCfg()
        {
            new AppSettings().Init();
        }        
    }

    public class AppSettings
    {
        public void Init()
        {
            Base = MyAppCfg.Get<IAppSettings>();
        }

        public static IAppSettings Base { get; set; }
    }
}