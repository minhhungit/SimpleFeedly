using DatabaseMigrateExt;
using DatabaseMigrateExt.Utils;
using FluentMigrator;
using System;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrStoredProcedureAndScript(2020,04,27,13,41,01)]
    public class SimpleFeedlyDb_20200427_134101_domain_group : Migration
    {
        public override void Up()
        {
            this.ExecuteStoredProcedure("dbo.GetActiveChannels.sql");
            this.ExecuteStoredProcedure("dbo.GetAllChannels.sql");
            this.ExecuteStoredProcedure("dbo.InsertFeedItem.sql");
        }

        public override void Down() { throw new NotImplementedException(); }
    }
}
