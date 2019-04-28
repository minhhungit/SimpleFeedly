using Serenity.ComponentModel;
using Serenity.Services;
using System.ComponentModel;

namespace SimpleFeedly.Rss
{
    public class MarkCheckedFeedItemRequest : ServiceRequest
    {
        [Required(true), DisplayName("Feed Item Id")]
        public long Id { get; set; }

        [Required(true), DisplayName("IsChecked")]
        public bool IsChecked { get; set; }
    }
}