namespace SimpleFeedly.Rss {
    export interface BlacklistsRow {
        Id?: number;
        ShrinkedTitle?: string;
        ShrinkedTitleHash?: number[];
    }

    export namespace BlacklistsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ShrinkedTitle';
        export const localTextPrefix = 'Rss.Blacklists';

        export declare const enum Fields {
            Id = "Id",
            ShrinkedTitle = "ShrinkedTitle",
            ShrinkedTitleHash = "ShrinkedTitleHash"
        }
    }
}

