using DatabaseMigrateExt;
using FluentMigrator;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrDataStructure(2019,04,29,21,37,01)]
    public class SimpleFeedlyDb_20190429_213701_rename_blacklist_host : Migration
    {        
        public override void Up()
        {
            if (Schema.Schema("dbo").Table("Blacklist").Column("ChannelId").Exists())
            {
                Execute.Sql(@"
                    IF EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Blacklist]') AND name = N'idx_Blacklist_unique')
                    DROP INDEX [idx_Blacklist_unique] ON [dbo].[Blacklist]
                    GO
                ");

                Delete.Column("ChannelId").FromTable("Blacklist").InSchema("dbo");

                Execute.Sql(@"
                    ;WITH cte AS (
                      SELECT 
                         row_number() OVER(PARTITION BY Title ORDER BY Id DESC) AS [rn],
	                     *
                      FROM dbo.Blacklist
                    )
                    DELETE FROM CTE  WHERE RN > 1
                ");

                Execute.Sql(@"
                    CREATE UNIQUE NONCLUSTERED INDEX [idx_Blacklist_unique] ON [dbo].[Blacklist]
                    (
	                    [Title] ASC
                    )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
                    GO
                ");
            }

            Execute.Sql(@"
                IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[AddBlacklistItems]') AND type IN (N'P', N'PC'))
                DROP PROCEDURE [dbo].[AddBlacklistItems]
                GO

                DROP TYPE IF EXISTS [dbo].[BlacklistItems]
                GO
                CREATE TYPE [dbo].[BlacklistItems] AS TABLE(
	                [FeedItemId] [BIGINT] NOT NULL,
	                [Title] [NVARCHAR](300) NOT NULL
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