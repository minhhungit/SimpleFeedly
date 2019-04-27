using DatabaseMigrateExt;
using FluentMigrator;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrDataStructure(2019,04,27,16,41,01)]
    public class SimpleFeedlyDb_20190427_164101_channel_crawlerengine : Migration
    {        
        public override void Up()
        {
            if (!Schema.Schema("dbo").Table("RssChannels").Column("RssCrawlerEngine").Exists())
            {
                Create.Column("RssCrawlerEngine").OnTable("RssChannels").InSchema("dbo")
                    .AsInt32().Nullable();
            }
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }    
}