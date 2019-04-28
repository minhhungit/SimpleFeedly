namespace SimpleFeedly.Rss {
    export interface AddBlacklistItemRequest extends Serenity.ServiceRequest {
        ChannelId?: number;
        FeedItemId?: number;
        Title?: string;
        IsDeleteFeedItem?: boolean;
    }
}

