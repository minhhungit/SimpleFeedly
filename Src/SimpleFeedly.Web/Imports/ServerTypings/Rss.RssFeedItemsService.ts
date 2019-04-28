namespace SimpleFeedly.Rss {
    export namespace RssFeedItemsService {
        export const baseUrl = 'Rss/RssFeedItems';

        export declare function Create(request: Serenity.SaveRequest<RssFeedItemsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<RssFeedItemsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RssFeedItemsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RssFeedItemsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function MarkCheckedFeedItem(request: MarkCheckedFeedItemRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function MarkCheckedBatchFeedItems(request: MarkCheckedBatchFeedItemsRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetFeedItemCheckedState(request: Serenity.ServiceRequest, onSuccess?: (response: FeedItemCheckedStateResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function AddBlacklistItem(request: AddBlacklistItemRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function AddBlacklistItems(request: AddBlacklistItemsRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Rss/RssFeedItems/Create",
            Update = "Rss/RssFeedItems/Update",
            Delete = "Rss/RssFeedItems/Delete",
            Retrieve = "Rss/RssFeedItems/Retrieve",
            List = "Rss/RssFeedItems/List",
            MarkCheckedFeedItem = "Rss/RssFeedItems/MarkCheckedFeedItem",
            MarkCheckedBatchFeedItems = "Rss/RssFeedItems/MarkCheckedBatchFeedItems",
            GetFeedItemCheckedState = "Rss/RssFeedItems/GetFeedItemCheckedState",
            AddBlacklistItem = "Rss/RssFeedItems/AddBlacklistItem",
            AddBlacklistItems = "Rss/RssFeedItems/AddBlacklistItems"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'MarkCheckedFeedItem', 
            'MarkCheckedBatchFeedItems', 
            'GetFeedItemCheckedState', 
            'AddBlacklistItem', 
            'AddBlacklistItems'
        ].forEach(x => {
            (<any>RssFeedItemsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

