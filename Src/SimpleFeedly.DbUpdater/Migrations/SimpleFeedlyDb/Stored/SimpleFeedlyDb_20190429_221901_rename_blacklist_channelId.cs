using DatabaseMigrateExt;
using DatabaseMigrateExt.Utils;
using FluentMigrator;
using System;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrStoredProcedure(2019,04,29,22,19,01)]
    public class SimpleFeedlyDb_20190429_221901_rename_blacklist_channelId : Migration
    {
        public override void Up()
        {
            this.ExecuteStoredProcedure("dbo.InsertFeedItem.sql");
        }

        public override void Down() { throw new NotImplementedException(); }
    }
}
