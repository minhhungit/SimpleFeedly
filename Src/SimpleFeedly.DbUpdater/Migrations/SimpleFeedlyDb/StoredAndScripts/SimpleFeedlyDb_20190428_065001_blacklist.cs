using DatabaseMigrateExt;
using DatabaseMigrateExt.Utils;
using FluentMigrator;
using System;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrStoredProcedureAndScript(2019,04,28,06,50,01)]
    public class SimpleFeedlyDb_20190428_065001_blacklist : Migration
    {
        public override void Up()
        {
            this.ExecuteStoredProcedure("dbo.AddBlacklistItem.sql");
            this.ExecuteStoredProcedure("dbo.InsertFeedItem.sql");            
        }

        public override void Down() { throw new NotImplementedException(); }
    }
}
