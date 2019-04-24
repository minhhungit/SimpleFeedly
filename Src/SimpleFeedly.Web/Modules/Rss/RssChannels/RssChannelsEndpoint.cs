
namespace SimpleFeedly.Rss.Endpoints
{
    using CodeHollow.FeedReader;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using MyRepository = Repositories.RssChannelsRepository;
    using MyRow = Entities.RssChannelsRow;

    [RoutePrefix("Services/Rss/RssChannels"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class RssChannelsController : ServiceEndpoint
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

        public ListResponse<MyRow> TestChannel(IDbConnection connection, TestChannelRequest request)
        {
            try
            {
                request.CheckNotNull();

                var feed = FeedReader.ReadAsync(request.FeedUrl).GetAwaiter().GetResult();

                if (feed == null || feed.Items == null)
                {
                    throw new Exception("Cannot fetch data");
                }
                else
                {
                    return new ListResponse<MyRow>
                    {
                        Entities = feed.Items.Select(x => new MyRow
                        {
                            Title = x.Title,
                            Link = x.Link,
                            Description = x.Description
                        }).ToList()
                    };
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Hi, we have an error: " + ex?.Message ?? string.Empty);
            }
        }
    }
}
