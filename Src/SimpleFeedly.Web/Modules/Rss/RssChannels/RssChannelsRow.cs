
namespace SimpleFeedly.Rss.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SimpleFeedlyConn"), Module("Rss"), TableName("[dbo].[RssChannels]")]
    [DisplayName("Channels"), InstanceName("Rss Channels")]
    [ReadPermission(PermissionKeys.Channels.Read)]
    [InsertPermission(PermissionKeys.Channels.Insert)]
    [UpdatePermission(PermissionKeys.Channels.Update)]
    [DeletePermission(PermissionKeys.Channels.Delete)]
    [LookupScript("Rss.RssChannels", Expiration = -1)]
    public sealed class RssChannelsRow : Row, IIdRow, INameRow, IIsActiveRow, IIsActiveDeletedRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Type")]
        public Int32? Type
        {
            get { return Fields.Type[this]; }
            set { Fields.Type[this] = value; }
        }

        [DisplayName("Title"), Size(300), QuickSearch, LookupInclude]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Link"), Size(500), QuickSearch, LookupInclude]
        public String Link
        {
            get { return Fields.Link[this]; }
            set { Fields.Link[this] = value; }
        }

        [DisplayName("Description"), QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Language"), Size(100)]
        public String Language
        {
            get { return Fields.Language[this]; }
            set { Fields.Language[this] = value; }
        }

        [DisplayName("Copyright"), Size(200)]
        public String Copyright
        {
            get { return Fields.Copyright[this]; }
            set { Fields.Copyright[this] = value; }
        }

        [DisplayName("Last Updated Date")]
        public DateTime? LastUpdatedDate
        {
            get { return Fields.LastUpdatedDate[this]; }
            set { Fields.LastUpdatedDate[this] = value; }
        }

        [DisplayName("Image Url"), Size(500)]
        public String ImageUrl
        {
            get { return Fields.ImageUrl[this]; }
            set { Fields.ImageUrl[this] = value; }
        }

        [DisplayName("Original Document")]
        public String OriginalDocument
        {
            get { return Fields.OriginalDocument[this]; }
            set { Fields.OriginalDocument[this] = value; }
        }

        [DisplayName("Is Error")]
        public Boolean? IsError
        {
            get { return Fields.IsError[this]; }
            set { Fields.IsError[this] = value; }
        }

        [DisplayName("Error Message")]
        public String ErrorMessage
        {
            get { return Fields.ErrorMessage[this]; }
            set { Fields.ErrorMessage[this] = value; }
        }

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [DisplayName("Crawler Engine")]
        public RssCrawlerEngine? RssCrawlerEngine
        {
            get
            {
                if (Fields.RssCrawlerEngine[this] == null)
                {
                    return null;
                }

                return (RssCrawlerEngine?)Fields.RssCrawlerEngine[this];
            }
            set { Fields.RssCrawlerEngine[this] = (int?)value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Title; }
        }

        public Int16Field IsActiveField
        {
            get { return Fields.IsActive; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RssChannelsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int32Field Type;
            public StringField Title;
            public StringField Link;
            public StringField Description;
            public StringField Language;
            public StringField Copyright;
            public DateTimeField LastUpdatedDate;
            public StringField ImageUrl;
            public StringField OriginalDocument;
            public BooleanField IsError;
            public StringField ErrorMessage;
            public Int16Field IsActive;
            public Int32Field RssCrawlerEngine;
        }
    }
}
