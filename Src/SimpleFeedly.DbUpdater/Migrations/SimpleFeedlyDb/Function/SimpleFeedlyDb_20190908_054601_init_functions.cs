using DatabaseMigrateExt;
using DatabaseMigrateExt.Utils;
using FluentMigrator;
using System;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrFunction(2019,09,08,05,46,01)]
    public class SimpleFeedlyDb_20190908_054601_init_functions : Migration
    {
        public override void Up()
        {
            this.ExecuteFunction("dbo.fnGetUnsignString.sql");
            this.ExecuteFunction("dbo.fnRemoveNonAlphaCharactersAndDigit.sql");            
        }

        public override void Down() { throw new NotImplementedException(); }
    }
}
