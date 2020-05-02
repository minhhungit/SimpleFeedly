using DatabaseMigrateExt;
using FluentMigrator;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrDataStructure(2020,05,03,01,19,01, useTransaction: false)]
    public class SimpleFeedlyDb_20200503_011901_feed_full_text_index : Migration
    {        
        public override void Up()
        {
            Execute.Sql(@"
                IF  EXISTS (SELECT * FROM sysfulltextcatalogs ftc WHERE ftc.name = N'RssFeedItemFulltextCat')
                DROP FULLTEXT CATALOG [RssFeedItemFulltextCat]
                GO
	
                CREATE FULLTEXT CATALOG [RssFeedItemFulltextCat]WITH ACCENT_SENSITIVITY = ON
                AS DEFAULT 
                AUTHORIZATION [dbo]
                GO

                CREATE FULLTEXT INDEX ON dbo.RssFeedItems(FeedItemKey, Title, Link, Author, Description, Content) KEY INDEX PK_RssFeedItems ON[RssFeedItemFulltextCat]; 
            ");
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }
}