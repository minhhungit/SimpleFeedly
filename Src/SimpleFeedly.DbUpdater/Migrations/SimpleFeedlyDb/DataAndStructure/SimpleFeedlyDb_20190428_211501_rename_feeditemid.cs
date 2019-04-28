using DatabaseMigrateExt;
using FluentMigrator;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrDataStructure(2019,04,28,21,15,01)]
    public class SimpleFeedlyDb_20190428_211501_rename_feeditemid : Migration
    {        
        public override void Up()
        {
            Execute.Sql(@"EXEC sp_RENAME 'dbo.RssFeedItems.FeedItemId' , 'FeedItemKey', 'COLUMN'");
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }    
}