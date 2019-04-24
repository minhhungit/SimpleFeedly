using Serenity.Services;

namespace SimpleFeedly.Rss
{
    public class FeedItemCheckedStateResponse : ServiceResponse
    {
        public long UnCheckedItems { get; set; }
    }
}