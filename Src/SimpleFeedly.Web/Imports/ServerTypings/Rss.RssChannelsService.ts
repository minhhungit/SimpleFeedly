namespace SimpleFeedly.Rss {
    export namespace RssChannelsService {
        export const baseUrl = 'Rss/RssChannels';

        export declare function Create(request: Serenity.SaveRequest<RssChannelsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<RssChannelsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RssChannelsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RssChannelsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function TestChannel(request: TestChannelRequest, onSuccess?: (response: TestChannelResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Rss/RssChannels/Create",
            Update = "Rss/RssChannels/Update",
            Delete = "Rss/RssChannels/Delete",
            Retrieve = "Rss/RssChannels/Retrieve",
            List = "Rss/RssChannels/List",
            TestChannel = "Rss/RssChannels/TestChannel"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'TestChannel'
        ].forEach(x => {
            (<any>RssChannelsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

