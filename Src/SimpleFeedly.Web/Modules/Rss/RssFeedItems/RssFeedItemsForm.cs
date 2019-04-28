
namespace SimpleFeedly.Rss.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rss.RssFeedItems")]
    [BasedOnRow(typeof(Entities.RssFeedItemsRow), CheckNames = true)]
    public class RssFeedItemsForm
    {
        [DisplayName("Channel")]
        public Int64 ChannelId { get; set; }

        public Boolean IsChecked { get; set; }

        public String FeedItemKey { get; set; }
        public String Title { get; set; }
        public String Link { get; set; }
        public String Description { get; set; }
        public DateTime PublishingDate { get; set; }
        public String Author { get; set; }
        [HtmlContentEditor(Rows = 17)]
        public String Content { get; set; }
    }
}