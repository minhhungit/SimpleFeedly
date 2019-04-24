
namespace SimpleFeedly.Rss.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rss.RssChannels")]
    [BasedOnRow(typeof(Entities.RssChannelsRow), CheckNames = true)]
    public class RssChannelsForm
    {
        //public Int32 Type { get; set; }
        public String Title { get; set; }
        public String Link { get; set; }
        public String Description { get; set; }
        public Boolean IsError { get; set; }

        [TextAreaEditor(Rows = 10)]
        public String ErrorMessage { get; set; }
        //public String Language { get; set; }
        //public String Copyright { get; set; }
        //public DateTime LastUpdatedDate { get; set; }
        //public String ImageUrl { get; set; }
        //public String OriginalDocument { get; set; }
    }
}