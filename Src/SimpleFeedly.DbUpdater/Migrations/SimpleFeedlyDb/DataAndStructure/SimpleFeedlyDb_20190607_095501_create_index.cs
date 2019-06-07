using DatabaseMigrateExt;
using FluentMigrator;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrDataStructure(2019,06,07,09,55,01)]
    public class SimpleFeedlyDb_20190607_095501_create_index : Migration
    {        
        public override void Up()
        {
            this.Execute.Sql(@"
                IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[RssFeedItems]') AND name = N'idx_RssFeedItems_ChannelId_FeedItemKey')
                CREATE NONCLUSTERED INDEX [idx_RssFeedItems_ChannelId_FeedItemKey] ON [dbo].[RssFeedItems]
                (
	                [ChannelId] ASC,
	                [FeedItemKey] ASC
                )WITH (STATISTICS_NORECOMPUTE = OFF, DROP_EXISTING = OFF, ONLINE = OFF) ON [PRIMARY]
                GO
            ");
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }    
}