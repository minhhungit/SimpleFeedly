namespace SimpleFeedly.Rss {
    export interface BlacklistsRow {
        Id?: number;
        Title?: string;
    }

    export namespace BlacklistsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'Rss.Blacklists';

        export declare const enum Fields {
            Id = "Id",
            Title = "Title"
        }
    }
}

