using DatabaseMigrateExt;
using DatabaseMigrateExt.Utils;
using FluentMigrator;
using System;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrStoredProcedure(2019,04,27,16,45,01)]
    public class SimpleFeedlyDb_20190427_164501_crawler_engine : Migration
    {
        public override void Up()
        {
            this.ExecuteStoredProcedure("dbo.GetActiveChannels.sql");
            this.ExecuteStoredProcedure("dbo.GetAllChannels.sql");
            this.ExecuteStoredProcedure("dbo.UpdateChannelDefaultEngine.sql");
        }

        public override void Down() { throw new NotImplementedException(); }
    }
}
