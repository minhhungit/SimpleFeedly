using DatabaseMigrateExt;
using DatabaseMigrateExt.Utils;
using FluentMigrator;
using System;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrStoredProcedure(2019,04,28,21,31,01)]
    public class SimpleFeedlyDb_20190428_213101_rename_column_feeditemid : Migration
    {
        public override void Up()
        {
            this.ExecuteStoredProcedure("dbo.CheckExistFeedItem.sql");
            this.ExecuteStoredProcedure("dbo.InsertFeedItem.sql");
        }

        public override void Down() { throw new NotImplementedException(); }
    }
}
