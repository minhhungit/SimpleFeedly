using Serenity.ComponentModel;
using Serenity.Services;
using System.ComponentModel;

namespace SimpleFeedly.Rss
{
    public class AddBlacklistItemRequest : ServiceRequest
    {
        [Required(true), DisplayName("ChannelId")]
        public long ChannelId { get; set; }

        [Required(true), DisplayName("Title")]
        public string Title { get; set; }
    }
}