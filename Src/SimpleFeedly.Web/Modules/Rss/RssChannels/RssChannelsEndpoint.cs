
namespace SimpleFeedly.Rss.Endpoints
{
    using CodeHollow.FeedReader;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using SimpleFeedly.Core.Utils;
    using StackExchange.Exceptional;
    using System;
    using System.Collections.Generic;
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

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public UndeleteResponse Undelete(IUnitOfWork uow, UndeleteRequest request)
        {
            return new MyRepository().Undelete(uow, request);
        }

        public TestChannelResponse TestChannel(IDbConnection connection, TestChannelRequest request)
        {
            try
            {
                request.CheckNotNull();

                if (!request.FeedUrl.IsUrl())
                {
                    throw new Exception($"Url '{request.FeedUrl}' is invalid");
                }

                var feed = RssCrawler.GetFeedsFromChannel(request.FeedUrl, null, false, out RssCrawlerEngine usedEngine, out Exception fetchError);

                if (feed == null || feed.Items == null || feed.Items.Count == 0)
                {
                    if (fetchError != null)
                    {
                        ErrorStore.LogExceptionWithoutContext(fetchError, false, false,
                                       new Dictionary<string, string>
                                       {
                                           {"channelId", request.FeedUrl },
                                           { "engine", usedEngine.ToString()}
                                       });
                    }
                    throw new Exception("Cannot fetch data");
                }
                else
                {
                    return new TestChannelResponse
                    {
                        Entities = feed.Items.Select(x => new MyRow
                        {
                            Title = x.Title,
                            Link = x.Link,
                            Description = x.Description
                        }).ToList(),
                        Engine = usedEngine.ToString()
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
