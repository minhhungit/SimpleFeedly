using DatabaseMigrateExt;
using FluentMigrator;

namespace SimpleFeedly.DbUpdater.Migrations.SimpleFeedlyDb
{
    [ExtMgrDataStructure(2016,05,15,07,26,00)]
    public class SimpleFeedlyDb_20160515_072600_UserPreferences : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("UserPreferences", "UserPreferenceId", s => s
                .WithColumn("UserId").AsInt64().NotNullable()
                .WithColumn("PreferenceType").AsString(100).NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Value").AsString(int.MaxValue).Nullable());

            Create.Index("IX_UserPref_UID_PrefType_Name")
                .OnTable("UserPreferences")
                .OnColumn("UserId").Ascending()
                .OnColumn("PreferenceType").Ascending()
                .OnColumn("Name").Ascending()
                .WithOptions().Unique();
        }
    }
}