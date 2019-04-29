namespace SimpleFeedly.Models
{
    public class BlacklistItem
    {
        public BlacklistItem(long feedItemId, string title)
        {
            FeedItemId = feedItemId;
            Title = title;
        }

        public long FeedItemId { get; set; }
        public string Title { get; set; }
    }
}