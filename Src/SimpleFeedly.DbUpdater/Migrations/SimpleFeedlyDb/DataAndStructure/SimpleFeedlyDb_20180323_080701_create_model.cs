using DatabaseMigrateExt;
using FluentMigrator;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrDataStructure(2018,03,23,08,07,01)]
    public class SimpleFeedlyDb_20180323_080701_create_model : Migration
    {        
        public override void Up()
        {
            if (!Schema.Schema("dbo").Table("RssChannels").Exists())
            {
                Create.Table("RssChannels").InSchema("dbo")
                    .WithColumn("Id").AsInt64().NotNullable().PrimaryKey().Identity()
                    .WithColumn("Type").AsInt32().Nullable()
                    .WithColumn("Title").AsString(300).Nullable()
                    .WithColumn("Link").AsString(500).Nullable()
                    .WithColumn("Description").AsString(int.MaxValue).Nullable()
                    .WithColumn("Language").AsString(100).Nullable()
                    .WithColumn("Copyright").AsString(200).Nullable()
                    .WithColumn("LastUpdatedDate").AsDateTime().Nullable()
                    .WithColumn("ImageUrl").AsString(500).Nullable()
                    .WithColumn("OriginalDocument").AsString(int.MaxValue).Nullable();
            }

            if (!Schema.Schema("dbo").Table("RssFeedItems").Exists())
            {
                Create.Table("RssFeedItems").InSchema("dbo")
                    .WithColumn("Id").AsInt64().NotNullable().PrimaryKey().Identity()
                    .WithColumn("ChannelId").AsInt64().NotNullable()
                    .WithColumn("FeedItemId").AsString(500).NotNullable()
                    .WithColumn("Title").AsString(300).Nullable()
                    .WithColumn("Link").AsString(500).Nullable()
                    .WithColumn("Description").AsString(int.MaxValue).Nullable()
                    .WithColumn("PublishingDate").AsDateTime().Nullable()
                    .WithColumn("Author").AsString(200).Nullable()
                    .WithColumn("Content ").AsString(int.MaxValue).Nullable()
                    .WithColumn("IsChecked").AsBoolean().Nullable();

                // Categories
            }

            if (!Schema.Schema("dbo").Table("RssFeedItemCategories").Exists())
            {
                Create.Table("RssFeedItemCategories").InSchema("dbo")
                    .WithColumn("Id").AsInt64().NotNullable().PrimaryKey().Identity()
                    .WithColumn("FeedItemId").AsInt64().NotNullable()
                    .WithColumn("Name").AsString(300).Nullable();
            }
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }

    [ExtMgrDataStructure(2018, 03, 23, 08, 07, 02)]
    public class SimpleFeedlyDb_20180323_080701_create_model_index : Migration
    {
        public override void Up()
        {
            Execute.Sql(@"
                IF  EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[RssFeedItems]') AND name = N'idx_RssFeedItems_ChannelId')
                DROP INDEX [idx_RssFeedItems_ChannelId] ON [dbo].[RssFeedItems]
                GO

                SET ANSI_PADDING ON
                GO

                IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[RssFeedItems]') AND name = N'idx_RssFeedItems_ChannelId')
                CREATE NONCLUSTERED INDEX [idx_RssFeedItems_ChannelId] ON [dbo].[RssFeedItems]
                (
	                [ChannelId] ASC
                )
                INCLUDE ( 	
	                [Title],
	                [Link],
	                [Description],
	                [PublishingDate],
	                [Author],
	                [Content ]
	                ) 
                GO
            ");

            Execute.Sql(@"
                IF  EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[RssFeedItemCategories]') AND name = N'idx_RssFeedItemCategories_FeedItemId')
                DROP INDEX [idx_RssFeedItemCategories_FeedItemId] ON [dbo].[RssFeedItemCategories]
                GO

                SET ANSI_PADDING ON
                GO

                IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[RssFeedItemCategories]') AND name = N'idx_RssFeedItemCategories_FeedItemId')
                CREATE NONCLUSTERED INDEX [idx_RssFeedItemCategories_FeedItemId] ON [dbo].[RssFeedItemCategories]
                (
	                [FeedItemId] ASC
                )
                INCLUDE ( 	[Name])
                GO
            ");

            Execute.Sql(@"
                IF  EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[RssFeedItems]') AND name = N'idx_RssFeedItems_Title')
                DROP INDEX [idx_RssFeedItems_Title] ON [dbo].[RssFeedItems]
                GO

                SET ANSI_PADDING ON
                GO

                IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[RssFeedItems]') AND name = N'idx_RssFeedItems_Title')
                CREATE NONCLUSTERED INDEX [idx_RssFeedItems_Title] ON [dbo].[RssFeedItems]
                (
	                [Title] ASC
                )
                GO
            ");
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }
}