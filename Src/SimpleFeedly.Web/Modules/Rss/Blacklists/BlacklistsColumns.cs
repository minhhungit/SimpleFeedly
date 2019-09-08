
namespace SimpleFeedly.Rss.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Rss.Blacklists")]
    [BasedOnRow(typeof(Entities.BlacklistsRow), CheckNames = true)]
    public class BlacklistsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, SortOrder(1)]
        public Int64 Id { get; set; }

        [EditLink, Width(700)]
        public String ShrinkedTitle { get; set; }

        [Width(250)]
        public Stream ShrinkedTitleHash { get; set; }
    }
}