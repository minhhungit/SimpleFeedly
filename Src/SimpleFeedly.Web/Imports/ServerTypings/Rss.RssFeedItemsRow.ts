namespace SimpleFeedly.Rss {
    export interface RssFeedItemsRow {
        Id?: number;
        ChannelId?: number;
        FeedItemKey?: string;
        Title?: string;
        Link?: string;
        Description?: string;
        PublishingDate?: string;
        Author?: string;
        Content?: string;
        IsChecked?: boolean;
        RssChannelTitle?: string;
        RssChannelDomainGroup?: string;
        CoverImageUrl?: string;
        XmlData?: string;
    }

    export namespace RssFeedItemsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'FeedItemKey';
        export const localTextPrefix = 'Rss.RssFeedItems';
        export const deletePermission = 'FeedItems:Delete';
        export const insertPermission = 'FeedItems:Insert';
        export const readPermission = 'FeedItems:Read';
        export const updatePermission = 'FeedItems:Update';

        export declare const enum Fields {
            Id = "Id",
            ChannelId = "ChannelId",
            FeedItemKey = "FeedItemKey",
            Title = "Title",
            Link = "Link",
            Description = "Description",
            PublishingDate = "PublishingDate",
            Author = "Author",
            Content = "Content",
            IsChecked = "IsChecked",
            RssChannelTitle = "RssChannelTitle",
            RssChannelDomainGroup = "RssChannelDomainGroup",
            CoverImageUrl = "CoverImageUrl",
            XmlData = "XmlData"
        }
    }
}

