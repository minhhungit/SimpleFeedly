
namespace SimpleFeedly.Rss.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Rss.RssChannels")]
    [BasedOnRow(typeof(Entities.RssChannelsRow), CheckNames = true)]
    public class RssChannelsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, SortOrder(2, true)]
        public Int64 Id { get; set; }
        [Width(70), SortOrder(1, true)]
        public Boolean IsError { get; set; }

        //public Int32 Type { get; set; }
        [EditLink, Width(325)]
        public String Title { get; set; }
        [Width(500)]
        public String Link { get; set; }
        [Width(400)]
        public String Description { get; set; }
        //public String Language { get; set; }
        //public String Copyright { get; set; }
        //public DateTime LastUpdatedDate { get; set; }
        //public String ImageUrl { get; set; }
        //public String OriginalDocument { get; set; }

        public Int32 RefreshTimeMinutes { get; set; }
    }
}