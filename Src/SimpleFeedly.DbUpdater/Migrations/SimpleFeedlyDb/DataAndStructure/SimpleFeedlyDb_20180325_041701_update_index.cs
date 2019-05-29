using DatabaseMigrateExt;
using FluentMigrator;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrDataStructure(2018,03,25,04,17,01)]
    public class SimpleFeedlyDb_20180325_041701_update_index : Migration
    {        
        public override void Up()
        {
            Execute.Sql(@"
                IF  EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[RssFeedItems]') AND name = N'idx_RssFeedItems_ChannelId')
                DROP INDEX [idx_RssFeedItems_ChannelId] ON [dbo].[RssFeedItems]
                GO

                IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[RssFeedItems]') AND name = N'idx_RssFeedItems_ChannelId')
                CREATE NONCLUSTERED INDEX [idx_RssFeedItems_ChannelId] ON [dbo].[RssFeedItems]
                (
	                [ChannelId] ASC,
	                [IsChecked] ASC,
	                [PublishingDate] ASC,
	                [Id] ASC
                )
                INCLUDE ( 	
	                [FeedItemId],
	                [Title],
	                [Link],
	                [Description],
	                [Author],
	                [Content ])
                GO
            ");
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }

    [ExtMgrDataStructure(2018, 04, 08, 20, 54, 01)]
    public class SimpleFeedlyDb_20180408205401_add_new_column : Migration
    {
        public override void Up()
        {
            if (!Schema.Table("RssChannels").Column("IsError").Exists())
            {
                Create.Column("IsError").OnTable("RssChannels")
                    .AsBoolean()
                    .WithDefaultValue(false)
                    .Nullable();
            }

            if (!Schema.Table("RssChannels").Column("ErrorMessage").Exists())
            {
                Create.Column("ErrorMessage").OnTable("RssChannels")
                    .AsString(int.MaxValue)
                    .Nullable();
            }
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }
}