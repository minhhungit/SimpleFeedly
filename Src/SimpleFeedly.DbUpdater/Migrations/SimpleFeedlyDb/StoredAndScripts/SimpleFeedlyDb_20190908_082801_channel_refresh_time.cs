using DatabaseMigrateExt;
using DatabaseMigrateExt.Utils;
using FluentMigrator;
using System;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrStoredProcedureAndScript(2019,09,08,08,28,01)]
    public class SimpleFeedlyDb_20190908_082801_channel_refresh_time : Migration
    {
        public override void Up()
        {
            this.ExecuteStoredProcedure("dbo.GetActiveChannels.sql");
        }

        public override void Down() { throw new NotImplementedException(); }
    }
}
