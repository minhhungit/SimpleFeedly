using DatabaseMigrateExt;
using FluentMigrator;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrDataStructure(2019,04,28,06,45,01)]
    public class SimpleFeedlyDb_20190428_064501_blacklist : Migration
    {        
        public override void Up()
        {
            this.Execute.Sql(@"
                SET ANSI_NULLS ON
                GO

                SET QUOTED_IDENTIFIER ON
                GO

                IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Blacklist]') AND type in (N'U'))
                BEGIN
                CREATE TABLE [dbo].[Blacklist](
	                [Id] [bigint] IDENTITY(1,1) NOT NULL,
	                [ChannelId] [bigint] NULL,
	                [Title] [nvarchar](300) NULL,
                 CONSTRAINT [PK_Blacklist] PRIMARY KEY CLUSTERED 
                (
	                [Id] ASC
                )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
                ) ON [PRIMARY]
                END
                GO"
            );

            this.Execute.Sql(@"
                IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Blacklist]') AND name = N'idx_Blacklist_unique')
                CREATE UNIQUE NONCLUSTERED INDEX [idx_Blacklist_unique] ON [dbo].[Blacklist]
                (
	                [ChannelId] ASC,
	                [Title] ASC
                )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
                GO
            ");
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }    
}