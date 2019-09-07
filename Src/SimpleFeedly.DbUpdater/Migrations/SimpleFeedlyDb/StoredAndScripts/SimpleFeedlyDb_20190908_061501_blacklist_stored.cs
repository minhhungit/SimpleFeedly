using DatabaseMigrateExt;
using DatabaseMigrateExt.Utils;
using FluentMigrator;
using System;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrStoredProcedureAndScript(2019,09,08,06,15,01)]
    public class SimpleFeedlyDb_20190908_061501_blacklist_stored : Migration
    {
        public override void Up()
        {
            this.ExecuteStoredProcedure("dbo.AddBlacklistItem.sql");
            this.ExecuteStoredProcedure("dbo.AddBlacklistItems.sql");
            this.ExecuteStoredProcedure("dbo.InsertFeedItem.sql");
        }

        public override void Down() { throw new NotImplementedException(); }
    }
}
