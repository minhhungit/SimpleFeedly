using DatabaseMigrateExt;
using DatabaseMigrateExt.Utils;
using FluentMigrator;
using System;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrStoredProcedureAndScript(2019,09,08,03,14,01)]
    public class SimpleFeedlyDb_20190908_031401_blacklist_hash : Migration
    {
        public override void Up()
        {
            this.ExecuteTsqlScript("v000001_blacklist_hash.sql");
        }

        public override void Down() { throw new NotImplementedException(); }
    }
}
