using DatabaseMigrateExt;
using DatabaseMigrateExt.Utils;
using FluentMigrator;
using System;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrStoredProcedureAndScript(2019,04,29,03,41,01)]
    public class SimpleFeedlyDb_20190429_034101_cleanup_feeditems : Migration
    {
        public override void Up()
        {
            this.ExecuteStoredProcedure("dbo.CleanupFeedItemsData.sql");
        }

        public override void Down() { throw new NotImplementedException(); }
    }
}
