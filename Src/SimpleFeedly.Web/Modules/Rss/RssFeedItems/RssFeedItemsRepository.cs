
namespace SimpleFeedly.Rss.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using SimpleFeedly.Common;
    using System;
    using System.Data;
    using MyRow = Entities.RssFeedItemsRow;

    public class RssFeedItemsRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, MyBaseListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }

        public class CustomListRequestHandle<TRow> : ListRequestHandler<TRow> where TRow : Row, new()
        {
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);

                if (Request is MyBaseListRequest customRequest)
                {
                    if (customRequest.EnableOnlyNextPreviousMode)
                    {
                        query.ApplySkipTakeAndCount(this.Request.Skip, this.Request.Take, this.Request.ExcludeTotalCount || DistinctFields != null);

                        // Setting CountRecords to false stops the count(*) query from running
                        query.CountRecords = false;
                    }
                }
            }
        }
    }
}