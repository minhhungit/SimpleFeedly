using DatabaseMigrateExt;
using DatabaseMigrateExt.Utils;
using FluentMigrator;
using System;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrStoredProcedure(2018,03,24,02,55,01)]
    public class SimpleFeedlyDb_20180324_025501_add_stored : Migration
    {
        public override void Up()
        {
            this.ExecuteStoredProcedure("dbo.CheckExistFeedItem.sql");            
            this.ExecuteStoredProcedure("dbo.GetAllChannels.sql");            
            this.ExecuteStoredProcedure("dbo.InsertFeedItem.sql");            
        }

        public override void Down() { throw new NotImplementedException(); }
    }

    [ExtMgrStoredProcedure(2018, 03, 24, 02, 55, 02)]
    public class SimpleFeedlyDb_20180324_025502_add_stored : Migration
    {
        public override void Up()
        {
            this.ExecuteStoredProcedure("dbo.MarkCheckedFeedItem.sql");
        }

        public override void Down() { throw new NotImplementedException(); }
    }

    [ExtMgrStoredProcedure(2018, 03, 24, 02, 55, 03)]
    public class SimpleFeedlyDb_20180324_025502_add_stored_03 : Migration
    {
        public override void Up()
        {
            this.ExecuteStoredProcedure("dbo.CheckExistFeedItem.sql");
        }

        public override void Down() { throw new NotImplementedException(); }
    }
}
