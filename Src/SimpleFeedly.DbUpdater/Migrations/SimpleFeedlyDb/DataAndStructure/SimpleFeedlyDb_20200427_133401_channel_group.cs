using DatabaseMigrateExt;
using FluentMigrator;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrDataStructure(2020,04,27,13,34,01)]
    public class SimpleFeedlyDb_20200427_133401_channel_group : Migration
    {        
        public override void Up()
        {
            if (!Schema.Schema("dbo").Table("RssChannels").Column("DomainGroup").Exists())
            {
                Create.Column("DomainGroup").OnTable("RssChannels").InSchema("dbo")
                    .AsString(100).Nullable();
            }
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }    
}