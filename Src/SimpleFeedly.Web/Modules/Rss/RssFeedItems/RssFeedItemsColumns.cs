
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

        //[RssFeedImageFormatter(FileProperty = "CoverImageUrl")]
        //public String CoverImageUrl { get; set; }

        [Width(1000), Sortable(false)]
        public String Title { get; set; }

        [Width(280), Sortable(false)]
        public String RssChannelTitle { get; set; }

        [QuickFilter, Hidden, DisplayName("Channel"), Sortable(false)]
        public Int64 ChannelId { get; set; }


        [Hidden, Sortable(false)]
        public String Link { get; set; }
        //public String Description { get; set; }
        [SortOrder(1, true), Width(120), QuickFilter]
        public DateTime PublishingDate { get; set; }
        [Hidden, Sortable(false)]
        public String Author { get; set; }
        //public String Content { get; set; }
        [Width(100), QuickFilter, Sortable(false)]
        public Boolean IsChecked { get; set; }
    }
}