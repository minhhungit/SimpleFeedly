namespace SimpleFeedly.Rss {
    export interface AddBlacklistItemRequest extends Serenity.ServiceRequest {
        ChannelId?: number;
        Title?: string;
    }
}

