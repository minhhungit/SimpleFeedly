using Serenity.ComponentModel;
using Serenity.Services;
using SimpleFeedly.Models;
using System.Collections.Generic;
using System.ComponentModel;

namespace SimpleFeedly.Rss
{
    public class AddBlacklistItemsRequest : ServiceRequest
    {
        [Required(true), DisplayName("Feed Items")]
        public List<BlacklistItem> FeedItems { get; set; }

        [Required(true), DisplayName("Is Delete Feed Item")]
        public bool IsDeleteFeedItem { get; set; }
    }
}