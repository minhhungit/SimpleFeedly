using DatabaseMigrateExt;
using FluentMigrator;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrDataStructure(2020,05,03,19,51,01)]
    public class SimpleFeedlyDb_20200503_195101_optimize_indexes : Migration
    {        
        public override void Up()
        {
            Execute.Sql(@"
                DROP INDEX IF EXISTS idx_RssFeedItems_ChannelId ON dbo.RssFeedItems
                GO

                DROP INDEX IF EXISTS idx_RssFeedItems_ChannelId_FeedItemKey ON dbo.RssFeedItems
                GO

                DROP INDEX IF EXISTS idx_RssFeedItems_IsCheck_PublishingDate ON dbo.RssFeedItems
                GO

                DROP INDEX IF EXISTS idx_RssFeedItems_Title ON dbo.RssFeedItems
                GO
            ");

            Execute.Sql(@"
                IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[RssFeedItems]') AND name = N'idx_RssFeedItems_PublishingDate')
                CREATE NONCLUSTERED INDEX [idx_RssFeedItems_PublishingDate] ON [dbo].[RssFeedItems]
                (
	                [PublishingDate] DESC
                )
                INCLUDE (ChannelId, IsChecked, FeedItemKey, Title, Link, Author, CoverImageUrl )
                WITH (STATISTICS_NORECOMPUTE = OFF, DROP_EXISTING = OFF, ONLINE = OFF) ON [PRIMARY]
                GO
            ");

            Execute.Sql(@"
                IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[RssFeedItems]') AND name = N'idx_RssFeedItems_Channel_PublishingDate')
                CREATE NONCLUSTERED INDEX [idx_RssFeedItems_Channel_PublishingDate] ON [dbo].[RssFeedItems]
                (
	                [ChannelId] ASC,
	                [PublishingDate] DESC
                )
                INCLUDE (IsChecked, FeedItemKey, Title, Link, Author, CoverImageUrl )
                WITH (STATISTICS_NORECOMPUTE = OFF, DROP_EXISTING = OFF, ONLINE = OFF) ON [PRIMARY]
                GO
            ");
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }
}