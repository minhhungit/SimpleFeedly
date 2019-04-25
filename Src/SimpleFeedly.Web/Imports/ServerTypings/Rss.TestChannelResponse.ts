namespace SimpleFeedly.Rss {
    export interface TestChannelResponse extends Serenity.ServiceResponse {
        Entities?: RssChannelsRow[];
        Engine?: string;
    }
}

