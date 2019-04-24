namespace SimpleFeedly.Rss {
    export interface MarkCheckedFeedItemRequest extends Serenity.ServiceRequest {
        FeedItemId?: number;
        IsChecked?: boolean;
    }
}

