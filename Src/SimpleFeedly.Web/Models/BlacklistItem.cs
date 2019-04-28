namespace SimpleFeedly.Models
{
    public class BlacklistItem
    {
        public BlacklistItem(long channelId, long feedItemId, string title)
        {
            ChannelId = channelId;
            FeedItemId = feedItemId;
            Title = title;
        }
        public long ChannelId { get; set; }
        public long FeedItemId { get; set; }
        public string Title { get; set; }
    }
}