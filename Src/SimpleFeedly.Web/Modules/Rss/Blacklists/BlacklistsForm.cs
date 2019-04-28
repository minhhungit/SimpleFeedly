
namespace SimpleFeedly.Rss.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rss.Blacklists")]
    [BasedOnRow(typeof(Entities.BlacklistsRow), CheckNames = true)]
    public class BlacklistsForm
    {
        public Int64 ChannelId { get; set; }
        public String Title { get; set; }
    }
}