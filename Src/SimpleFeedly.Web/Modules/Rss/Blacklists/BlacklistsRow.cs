
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
    [UniqueConstraint(new[] { "ShrinkedTitle" })]
    public sealed class BlacklistsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Shrinked Title"), Size(300), QuickSearch]
        public String ShrinkedTitle
        {
            get { return Fields.ShrinkedTitle[this]; }
            set { Fields.ShrinkedTitle[this] = value; }
        }

        [DisplayName("Shrinked Title Hashed"), Size(16)]
        public Stream ShrinkedTitleHash
        {
            get { return Fields.ShrinkedTitleHash[this]; }
            set { Fields.ShrinkedTitleHash[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ShrinkedTitle; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BlacklistsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public StringField ShrinkedTitle;
            public StreamField ShrinkedTitleHash;
        }
    }
}
