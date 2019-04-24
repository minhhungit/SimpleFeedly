using DatabaseMigrateExt;
using DatabaseMigrateExt.Utils;
using FluentMigrator;
using System;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrStoredProcedure(2019,04,25,03,22,01)]
    public class SimpleFeedlyDb_20190425_032201_markchecked_batch : Migration
    {
        public override void Up()
        {
            this.ExecuteStoredProcedure("dbo.MarkCheckedFeedItems.sql");
        }

        public override void Down() { throw new NotImplementedException(); }
    }
}
