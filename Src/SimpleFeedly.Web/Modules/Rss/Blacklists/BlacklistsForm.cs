
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
        public String ShrinkedTitle { get; set; }
        public Stream ShrinkedTitleHash { get; set; }
    }
}