
namespace SimpleFeedly.Rss.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SimpleFeedlyConn"), Module("Rss"), TableName("[dbo].[Blacklist]")]
    [DisplayName("Blacklists"), InstanceName("Blacklist")]
    [ReadPermission(PermissionKeys.Blacklists.Read)]
    [InsertPermission(PermissionKeys.Blacklists.Insert)]
    [UpdatePermission(PermissionKeys.Blacklists.Update)]
    [DeletePermission(PermissionKeys.Blacklists.Delete)]
    public sealed class BlacklistsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Title"), Size(300), QuickSearch]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Title; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BlacklistsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public StringField Title;
        }
    }
}
