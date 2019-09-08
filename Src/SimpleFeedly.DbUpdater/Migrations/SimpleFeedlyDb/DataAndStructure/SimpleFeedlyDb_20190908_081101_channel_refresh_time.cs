using DatabaseMigrateExt;
using FluentMigrator;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrDataStructure(2019,09,08,08,11,01)]
    public class SimpleFeedlyDb_20190908_081101_channel_refresh_time : Migration
    {        
        public override void Up()
        {
            if (!Schema.Schema("dbo").Table("RssChannels").Column("RefreshTimeMinutes").Exists())
            {
                Create.Column("RefreshTimeMinutes").OnTable("RssChannels").InSchema("dbo")
                    .AsInt32().Nullable();
            }
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }    
}