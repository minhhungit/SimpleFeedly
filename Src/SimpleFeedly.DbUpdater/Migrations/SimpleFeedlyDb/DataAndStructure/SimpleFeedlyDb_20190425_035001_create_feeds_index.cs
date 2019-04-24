using DatabaseMigrateExt;
using FluentMigrator;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrDataStructure(2019,04,25,03,50,01)]
    public class SimpleFeedlyDb_20190425_035001_create_feeds_index : Migration
    {        
        public override void Up()
        {
            Execute.Sql(@"
                IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[RssFeedItems]') AND name = N'idx_RssFeedItems_IsCheck_PublishingDate')
                CREATE NONCLUSTERED INDEX [idx_RssFeedItems_IsCheck_PublishingDate] ON [dbo].[RssFeedItems]
                (
	                [IsChecked] ASC,
	                [PublishingDate] ASC
                )
                INCLUDE ( 	[ChannelId],
	                [FeedItemId],
	                [Title],
	                [Link],
	                [Description],
	                [Author],
	                [Content ]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
                GO
            ");
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }    
}