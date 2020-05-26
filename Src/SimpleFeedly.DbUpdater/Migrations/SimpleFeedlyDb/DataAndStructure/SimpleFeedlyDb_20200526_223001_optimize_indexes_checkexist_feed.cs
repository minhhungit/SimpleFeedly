using DatabaseMigrateExt;
using FluentMigrator;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrDataStructure(2020,05,26,22,30,01)]
    public class SimpleFeedlyDb_20200526_223001_optimize_indexes_checkexist_feed : Migration
    {        
        public override void Up()
        {
            Execute.Sql(@"
                DROP INDEX IF EXISTS [idx_RssFeedItems_FeedItemKey] ON [dbo].[RssFeedItems]
                GO

                SET ANSI_PADDING ON
                GO

                CREATE NONCLUSTERED INDEX [idx_RssFeedItems_FeedItemKey] ON [dbo].[RssFeedItems]
                (
	                [FeedItemKey] ASC
                )
                INCLUDE([ChannelId]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
                GO
            ");
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }
}