using DatabaseMigrateExt;
using DatabaseMigrateExt.Utils;
using FluentMigrator;
using System;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrStoredProcedure(2019,04,27,08,59,01)]
    public class SimpleFeedlyDb_20190427_085901_get_active_channels : Migration
    {
        public override void Up()
        {
            this.ExecuteStoredProcedure("dbo.GetActiveChannels.sql");
        }

        public override void Down() { throw new NotImplementedException(); }
    }
}
