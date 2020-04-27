﻿namespace SimpleFeedly.Rss {
    export interface RssChannelsRow {
        Id?: number;
        Type?: number;
        DomainGroup?: string;
        Title?: string;
        Link?: string;
        Description?: string;
        Language?: string;
        Copyright?: string;
        LastUpdatedDate?: string;
        ImageUrl?: string;
        OriginalDocument?: string;
        IsError?: boolean;
        ErrorMessage?: string;
        IsActive?: number;
        RssCrawlerEngine?: RssCrawlerEngine;
        RefreshTimeMinutes?: number;
    }

    export namespace RssChannelsRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'Rss.RssChannels';
        export const lookupKey = 'Rss.RssChannels';

        export function getLookup(): Q.Lookup<RssChannelsRow> {
            return Q.getLookup<RssChannelsRow>('Rss.RssChannels');
        }
        export const deletePermission = 'Channels:Delete';
        export const insertPermission = 'Channels:Insert';
        export const readPermission = 'Channels:Read';
        export const updatePermission = 'Channels:Update';

        export declare const enum Fields {
            Id = "Id",
            Type = "Type",
            DomainGroup = "DomainGroup",
            Title = "Title",
            Link = "Link",
            Description = "Description",
            Language = "Language",
            Copyright = "Copyright",
            LastUpdatedDate = "LastUpdatedDate",
            ImageUrl = "ImageUrl",
            OriginalDocument = "OriginalDocument",
            IsError = "IsError",
            ErrorMessage = "ErrorMessage",
            IsActive = "IsActive",
            RssCrawlerEngine = "RssCrawlerEngine",
            RefreshTimeMinutes = "RefreshTimeMinutes"
        }
    }
}

