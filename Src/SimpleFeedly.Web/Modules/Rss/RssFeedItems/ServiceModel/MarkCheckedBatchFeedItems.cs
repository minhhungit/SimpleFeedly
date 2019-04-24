using Serenity.ComponentModel;
using Serenity.Services;
using System.Collections.Generic;
using System.ComponentModel;

namespace SimpleFeedly.Rss
{
    public class MarkCheckedBatchFeedItemsRequest : ServiceRequest
    {
        [Required(true), DisplayName("Feed Item Ids")]
        public List<long> FeedItemIds { get; set; }

        [Required(true), DisplayName("IsChecked")]
        public bool IsChecked { get; set; }
    }
}