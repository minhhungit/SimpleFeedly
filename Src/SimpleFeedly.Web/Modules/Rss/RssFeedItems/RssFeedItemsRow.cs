
namespace SimpleFeedly.Rss.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SimpleFeedlyConn"), Module("Rss"), TableName("[dbo].[RssFeedItems]")]
    [DisplayName("Feed Items"), InstanceName("Rss Feed Items")]
    [ReadPermission(PermissionKeys.FeedItems.Read)]
    [InsertPermission(PermissionKeys.FeedItems.Insert)]
    [UpdatePermission(PermissionKeys.FeedItems.Update)]
    [DeletePermission(PermissionKeys.FeedItems.Delete)]
    public sealed class RssFeedItemsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Channel Id"), NotNull]
        [ForeignKey(typeof(RssChannelsRow), nameof(RssChannelsRow.Fields.Id)), LeftJoin("jChannel")]
        [LookupEditor(typeof(RssChannelsRow))]
        public Int64? ChannelId
        {
            get { return Fields.ChannelId[this]; }
            set { Fields.ChannelId[this] = value; }
        }

        [DisplayName("Channel Name")]
        [Expression("jChannel.Title")]
        public String RssChannelTitle
        {
            get { return Fields.RssChannelTitle[this]; }
            set { Fields.RssChannelTitle[this] = value; }
        }

        [DisplayName("Domain Group")]
        [Expression("jChannel.DomainGroup")]
        public String RssChannelDomainGroup
        {
            get { return Fields.RssChannelDomainGroup[this]; }
            set { Fields.RssChannelDomainGroup[this] = value; }
        }

        [DisplayName("Feed Item Key"), Size(500), NotNull, QuickSearch(SearchType.FullTextContains)]
        public String FeedItemKey
        {
            get { return Fields.FeedItemKey[this]; }
            set { Fields.FeedItemKey[this] = value; }
        }

        [DisplayName("Title"), Size(300)]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Link"), Size(500)]
        public String Link
        {
            get { return Fields.Link[this]; }
            set { Fields.Link[this] = value; }
        }

        [DisplayName("Description"), MinSelectLevel(SelectLevel.Details)]
        [TextAreaEditor(Rows = 3)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Publishing Date")]
        public DateTime? PublishingDate
        {
            get { return Fields.PublishingDate[this]; }
            set { Fields.PublishingDate[this] = value; }
        }

        [DisplayName("Author"), Size(200)]
        public String Author
        {
            get { return Fields.Author[this]; }
            set { Fields.Author[this] = value; }
        }

        [DisplayName("Content"), Column("Content"), QuickSearch(SearchType.FullTextContains), MinSelectLevel(SelectLevel.Details)]
        public String Content
        {
            get { return Fields.Content[this]; }
            set { Fields.Content[this] = value; }
        }

        [DisplayName("Is Checked")]
        public Boolean? IsChecked
        {
            get { return Fields.IsChecked[this]; }
            set { Fields.IsChecked[this] = value; }
        }

        [DisplayName("Cover Image Url"), Column("CoverImageUrl")]
        public String CoverImageUrl
        {
            get { return Fields.CoverImageUrl[this]; }
            set { Fields.CoverImageUrl[this] = value; }
        }

        [DisplayName("Xml Data"), Column("XmlData"), MinSelectLevel(SelectLevel.Details)]
        public String XmlData
        {
            get { return Fields.XmlData[this]; }
            set { Fields.XmlData[this] = value; }
        }
        
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FeedItemKey; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RssFeedItemsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field ChannelId;
            public StringField FeedItemKey;
            public StringField Title;
            public StringField Link;
            public StringField Description;
            public DateTimeField PublishingDate;
            public StringField Author;
            public StringField Content;
            public BooleanField IsChecked;

            public StringField RssChannelTitle;
            public StringField RssChannelDomainGroup;
            public StringField CoverImageUrl;
            public StringField XmlData;
        }
    }
}
