using Serenity.ComponentModel;
using Serenity.Services;
using System.ComponentModel;

namespace SimpleFeedly.Rss
{
    public class TestChannelRequest : ServiceRequest
    {
        [Required(true), DisplayName("Feed Url")]
        public string FeedUrl { get; set; }        
    }
}