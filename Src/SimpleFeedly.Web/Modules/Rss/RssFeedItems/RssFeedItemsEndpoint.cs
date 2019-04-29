
namespace SimpleFeedly.Rss.Endpoints
{
    using Dapper;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using MyRepository = Repositories.RssFeedItemsRepository;
    using MyRow = Entities.RssFeedItemsRow;

    [RoutePrefix("Services/Rss/RssFeedItems"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class RssFeedItemsController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        [HttpPost, JsonFilter]
        public Result<ServiceResponse> MarkCheckedFeedItem(MarkCheckedFeedItemRequest request)
        {
            return this.ExecuteMethod(() =>
            {
                request.CheckNotNull();

                SimpleFeedlyDatabaseAccess.MarkCheckedFeedItem(request.Id, request.IsChecked);

                return new ServiceResponse();
            });
        }

        [HttpPost, JsonFilter]
        public Result<ServiceResponse> MarkCheckedBatchFeedItems(MarkCheckedBatchFeedItemsRequest request)
        {
            if (request.Ids == null || !request.Ids.Any())
            {
                throw new System.Exception("Please choose at least one feed item");
            }

            return this.ExecuteMethod(() =>
            {
                request.CheckNotNull();

                var ids = request.Ids.Distinct().ToList();

                SimpleFeedlyDatabaseAccess.MarkCheckedFeedItems(ids, request.IsChecked);

                return new ServiceResponse();
            });
        }

        [HttpPost, JsonFilter]
        public FeedItemCheckedStateResponse GetFeedItemCheckedState(IDbConnection connection)
        {
            // var totalItems = connection.Count<MyRow>();
            var unCheckedItems = connection.Count<MyRow>(new Criteria(MyRow.Fields.IsChecked) == 0 || new Criteria(MyRow.Fields.IsChecked).IsNull());

            return new FeedItemCheckedStateResponse
            {
                UnCheckedItems = unCheckedItems
            };
        }

        [HttpPost, JsonFilter]
        public ServiceResponse AddBlacklistItem(AddBlacklistItemRequest request)
        {
            if (!Authorization.HasPermission( PermissionKeys.Blacklists.Insert))
            {
                throw new System.Exception("You have no permission for this action");
            }

            using (var connection = SqlConnections.NewFor<Entities.RssChannelsRow>())
            {
                var channelEntity = connection.TryById<Entities.RssChannelsRow>(request.ChannelId);

                if (channelEntity != null)
                {
                    SimpleFeedlyDatabaseAccess.AddBlacklistItem(request.FeedItemId, request.Title, request.IsDeleteFeedItem);
                }                
            }

            return new ServiceResponse();
        }

        [HttpPost, JsonFilter]
        public Result<ServiceResponse> AddBlacklistItems(AddBlacklistItemsRequest request)
        {
            if (!Authorization.HasPermission(PermissionKeys.Blacklists.InsertBatch))
            {
                throw new System.Exception("You have no permission for this action");
            }

            if (request.FeedItems == null || !request.FeedItems.Any())
            {
                throw new System.Exception("Please choose at least one feed item");
            }

            return this.ExecuteMethod(() =>
            {
                request.CheckNotNull();

                var blacklist = request.FeedItems
                    .Where(x => x.FeedItemId > 0 && !string.IsNullOrWhiteSpace(x.Title))
                    .Select(x => new Models.BlacklistItem(x.FeedItemId, x.Title)).ToList();

                SimpleFeedlyDatabaseAccess.AddBlacklistItems(blacklist, request.IsDeleteFeedItem);

                return new ServiceResponse();
            });
        }
    }
}
