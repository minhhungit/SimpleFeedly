using Microsoft.SqlServer.Server;
using SimpleFeedly.Core.Collections;
using SimpleFeedly.Models;
using System.Collections.Generic;
using System.Data;

namespace SimpleFeedly.Collections
{
    public class BlacklistItemsCollection : SqlStructureParamCollection<BlacklistItem>, IEnumerable<SqlDataRecord>
    {
        public BlacklistItemsCollection() : base(string.Empty, string.Empty) { }
        public BlacklistItemsCollection(string parametername) : base(parametername, "dbo.BlacklistItems") { }

        IEnumerator<SqlDataRecord> IEnumerable<SqlDataRecord>.GetEnumerator()
        {
            var sqlRow = new SqlDataRecord(
                new SqlMetaData("ChannelId", SqlDbType.BigInt),
                new SqlMetaData("FeedItemId", SqlDbType.BigInt),
                new SqlMetaData("Title", SqlDbType.NVarChar, 300));

            for (int i = 0; i < this.Count; i++)
            {
                sqlRow.SetInt64(0, this[i].ChannelId);
                sqlRow.SetInt64(1, this[i].FeedItemId);
                sqlRow.SetString(2, this[i].Title ?? string.Empty);
                yield return sqlRow;
            }
        }
    }
}