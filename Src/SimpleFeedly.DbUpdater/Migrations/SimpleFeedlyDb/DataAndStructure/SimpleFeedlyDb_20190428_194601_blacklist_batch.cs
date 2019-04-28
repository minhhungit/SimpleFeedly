using DatabaseMigrateExt;
using FluentMigrator;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrDataStructure(2019,04,28,19,46,01)]
    public class SimpleFeedlyDb_20190428_194601_blacklist_batch : Migration
    {        
        public override void Up()
        {
            this.Execute.Sql(@"
                IF NOT EXISTS (SELECT * FROM sys.types st JOIN sys.schemas ss ON st.schema_id = ss.schema_id WHERE st.name = N'BlacklistItems' AND ss.name = N'dbo')
                CREATE TYPE [dbo].[BlacklistItems] AS TABLE(
	                [ChannelId] [BIGINT] NOT NULL,
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