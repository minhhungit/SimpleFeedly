namespace SimpleFeedly.Rss {
    export interface MarkCheckedFeedItemRequest extends Serenity.ServiceRequest {
        Id?: number;
        IsChecked?: boolean;
    }
}

