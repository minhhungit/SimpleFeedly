using DatabaseMigrateExt;
using DatabaseMigrateExt.Utils;
using FluentMigrator;
using System;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrStoredProcedure(2019,04,29,21,44,01)]
    public class SimpleFeedlyDb_20190429_214401_rename_blacklist : Migration
    {
        public override void Up()
        {
            this.ExecuteStoredProcedure("dbo.AddBlacklistItem.sql");
            this.ExecuteStoredProcedure("dbo.AddBlacklistItems.sql");
        }

        public override void Down() { throw new NotImplementedException(); }
    }
}
