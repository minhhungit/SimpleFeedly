namespace SimpleFeedly.Rss {
    export interface MarkCheckedBatchFeedItemsRequest extends Serenity.ServiceRequest {
        FeedItemIds?: number[];
        IsChecked?: boolean;
    }
}

