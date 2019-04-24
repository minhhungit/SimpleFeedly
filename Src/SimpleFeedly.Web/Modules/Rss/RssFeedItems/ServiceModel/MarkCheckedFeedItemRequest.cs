using Serenity.ComponentModel;
using Serenity.Services;
using System.ComponentModel;

namespace SimpleFeedly.Rss
{
    public class MarkCheckedFeedItemRequest : ServiceRequest
    {
        [Required(true), DisplayName("FeedItem Id")]
        public long FeedItemId { get; set; }

        [Required(true), DisplayName("IsChecked")]
        public bool IsChecked { get; set; }
    }
}