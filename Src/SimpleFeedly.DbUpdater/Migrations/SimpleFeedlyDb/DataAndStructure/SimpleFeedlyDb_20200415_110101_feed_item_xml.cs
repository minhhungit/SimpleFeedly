using DatabaseMigrateExt;
using FluentMigrator;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrDataStructure(2020,04,15,11,01,01)]
    public class SimpleFeedlyDb_20200415_110101_feed_item_xml : Migration
    {        
        public override void Up()
        {
            if (!Schema.Schema("dbo").Table("RssFeedItems").Column("CoverImageUrl").Exists())
            {
                Create.Column("CoverImageUrl").OnTable("RssFeedItems").InSchema("dbo")
                    .AsString(500).Nullable();
            }

            if (!Schema.Schema("dbo").Table("RssFeedItems").Column("XmlData").Exists())
            {
                Create.Column("XmlData").OnTable("RssFeedItems").InSchema("dbo")
                    .AsString(int.MaxValue).Nullable();
            }
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }    
}