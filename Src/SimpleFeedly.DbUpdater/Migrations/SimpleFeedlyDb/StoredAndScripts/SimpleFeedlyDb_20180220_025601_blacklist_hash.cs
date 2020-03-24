using DatabaseMigrateExt;
using DatabaseMigrateExt.Utils;
using FluentMigrator;
using System;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrStoredProcedureAndScript(2018,02,20,02,56,01)]
    public class SimpleFeedlyDb_20180220_025601_blacklist_hash : Migration
    {
        public override void Up()
        {
            this.ExecuteGeneralScript("v000001_blacklist_hash.sql");
        }

        public override void Down() { throw new NotImplementedException(); }
    }
}
