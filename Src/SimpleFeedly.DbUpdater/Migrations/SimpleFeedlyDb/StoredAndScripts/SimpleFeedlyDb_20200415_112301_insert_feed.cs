using DatabaseMigrateExt;
using DatabaseMigrateExt.Utils;
using FluentMigrator;
using System;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrStoredProcedureAndScript(2020,04,15,11,23,01)]
    public class SimpleFeedlyDb_20200415_112301_insert_feed : Migration
    {
        public override void Up()
        {
            this.ExecuteStoredProcedure("dbo.InsertFeedItem.sql");
        }

        public override void Down() { throw new NotImplementedException(); }
    }
}
