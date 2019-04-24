using DatabaseMigrateExt;
using FluentMigrator;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrDataStructure(2019,04,25,03,13,01)]
    public class SimpleFeedlyDb_20190425_031301_create_udt_type : Migration
    {        
        public override void Up()
        {
            Execute.Sql(@"
                IF NOT EXISTS (SELECT * FROM sys.types st JOIN sys.schemas ss ON st.schema_id = ss.schema_id WHERE st.name = N'ListBigIntNumbers' AND ss.name = N'dbo')
                CREATE TYPE [dbo].[ListBigIntNumbers] AS TABLE(
	                [Id] BIGINT NOT NULL
                )
                GO
            ");
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }    
}