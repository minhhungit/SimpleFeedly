namespace SimpleFeedly
{
    public static partial class SiteInitialization
    {
        private static void InitializeDataAccessHelpers()
        {
            new SimpleFeedlyDatabaseAccess().Setup(() =>
            {
                return new DatabaseAccessSettings(AppSettings.Connections.SimpleFeedly.ConnectionString, 200);
            });
        }
    }
}