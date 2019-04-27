using DatabaseMigrateExt;
using FluentMigrator;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrDataStructure(2019,04,27,08,34,01)]
    public class SimpleFeedlyDb_20190427_083401_add_isactive_column : Migration
    {        
        public override void Up()
        {
            if (!Schema.Schema("dbo").Table("RssChannels").Column("IsActive").Exists())
            {
                Create.Column("IsActive").OnTable("RssChannels").InSchema("dbo")
                    .AsInt16().NotNullable().WithDefaultValue(1);
            }

            if (!Schema.Schema("dbo").Table("RssFeedItems").Column("IsActive").Exists())
            {
                Create.Column("IsActive").OnTable("RssFeedItems").InSchema("dbo")
                    .AsInt16().NotNullable().WithDefaultValue(1);
            }
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }    
}