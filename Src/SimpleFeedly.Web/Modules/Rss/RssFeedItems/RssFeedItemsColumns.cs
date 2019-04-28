
namespace SimpleFeedly.Rss.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Rss.RssFeedItems")]
    [BasedOnRow(typeof(Entities.RssFeedItemsRow), CheckNames = true)]
    public class RssFeedItemsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, SortOrder(2), Hidden]
        public Int64 Id { get; set; }

        //public String FeedItemKey { get; set; }
        [Width(1000)]
        public String Title { get; set; }

        [Width(280)]
        public String RssChannelTitle { get; set; }

        [QuickFilter, Hidden, DisplayName("Channel")]
        public Int64 ChannelId { get; set; }


        [Hidden]
        public String Link { get; set; }
        //public String Description { get; set; }
        [SortOrder(1, true), Width(120)]
        public DateTime PublishingDate { get; set; }
        [Hidden]
        public String Author { get; set; }
        //public String Content { get; set; }
        [Width(100), QuickFilter]
        public Boolean IsChecked { get; set; }
    }
}