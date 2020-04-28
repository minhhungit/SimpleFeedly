using DatabaseMigrateExt;
using DatabaseMigrateExt.Utils;
using FluentMigrator;
using System;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrStoredProcedureAndScript(2020,04,28,13,53,01)]
    public class SimpleFeedlyDb_20200428_135301_check_exist : Migration
    {
        public override void Up()
        {
            this.ExecuteStoredProcedure("dbo.CheckExistFeedItem.sql");
        }

        public override void Down() { throw new NotImplementedException(); }
    }
}
