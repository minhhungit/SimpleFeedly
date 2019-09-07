using DatabaseMigrateExt;
using DatabaseMigrateExt.Utils;
using FluentMigrator;
using System;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrStoredProcedureAndScript(2019,04,28,20,01,01)]
    public class SimpleFeedlyDb_20190428_200101_blacklist_batch : Migration
    {
        public override void Up()
        {
            this.ExecuteStoredProcedure("dbo.AddBlacklistItem.sql");       
            this.ExecuteStoredProcedure("dbo.AddBlacklistItems.sql");       
        }

        public override void Down() { throw new NotImplementedException(); }
    }
}
