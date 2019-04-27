
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

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public UndeleteResponse Undelete(IUnitOfWork uow, UndeleteRequest request)
        {
            return new MyRepository().Undelete(uow, request);
        }

        [HttpPost, JsonFilter]
        public Result<ServiceResponse> MarkCheckedFeedItem(MarkCheckedFeedItemRequest request)
        {
            return this.ExecuteMethod(() =>
            {
                request.CheckNotNull();

                SimpleFeedlyDatabaseAccess.MarkCheckedFeedItem(request.FeedItemId, request.IsChecked);

                return new ServiceResponse();
            });
        }

        [HttpPost, JsonFilter]
        public Result<ServiceResponse> MarkCheckedBatchFeedItems(MarkCheckedBatchFeedItemsRequest request)
        {
            if (request.FeedItemIds == null || !request.FeedItemIds.Any())
            {
                throw new System.Exception("Please choose at least one feed item");
            }

            return this.ExecuteMethod(() =>
            {
                request.CheckNotNull();

                var ids = request.FeedItemIds.Distinct().ToList();

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
    }
}
