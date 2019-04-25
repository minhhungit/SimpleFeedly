using Serenity.ComponentModel;
using Serenity.Services;
using System.Collections.Generic;

namespace SimpleFeedly.Rss
{
    public class TestChannelResponse : ServiceResponse
    {
        public List<Entities.RssChannelsRow> Entities { get; set; }
        public string Engine { get; set; }
    }
}