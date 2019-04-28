namespace SimpleFeedly.Rss {
    export interface BlacklistsRow {
        Id?: number;
        ChannelId?: number;
        Title?: string;
    }

    export namespace BlacklistsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'Rss.Blacklists';

        export declare const enum Fields {
            Id = "Id",
            ChannelId = "ChannelId",
            Title = "Title"
        }
    }
}

