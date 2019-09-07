using DatabaseMigrateExt;
using DatabaseMigrateExt.Utils;
using FluentMigrator;
using System;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrStoredProcedureAndScript(2018,04,08,21,05,01)]
    public class SimpleFeedlyDb_20180408_210501_add_stored_newcolumn : Migration
    {
        public override void Up()
        {
            this.ExecuteStoredProcedure("dbo.UpdateChannelErrorStatus.sql");
        }

        public override void Down() { throw new NotImplementedException(); }
    }
}
