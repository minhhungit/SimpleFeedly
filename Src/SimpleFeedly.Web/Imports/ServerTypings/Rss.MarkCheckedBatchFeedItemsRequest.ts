namespace SimpleFeedly.Rss {
    export interface MarkCheckedBatchFeedItemsRequest extends Serenity.ServiceRequest {
        Ids?: number[];
        IsChecked?: boolean;
    }
}

