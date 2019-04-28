namespace SimpleFeedly
{
    public static partial class SiteInitialization
    {
        private static void InitializeDataAccessHelpers()
        {
            new SimpleFeedlyDatabaseAccess().Setup(() =>
            {
                return new DatabaseAccessSettings(AppSettings.Base.Connections.SimpleFeedly.ConnectionString, 200);
            });
        }
    }
}