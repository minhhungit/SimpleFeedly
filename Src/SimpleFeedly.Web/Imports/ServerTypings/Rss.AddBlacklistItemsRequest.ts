namespace SimpleFeedly.Rss {
    export interface AddBlacklistItemsRequest extends Serenity.ServiceRequest {
        FeedItems?: Models.BlacklistItem[];
        IsDeleteFeedItem?: boolean;
    }
}

