using Microsoft.SqlServer.Server;
using SimpleFeedly.Core.Collections;
using System.Collections.Generic;
using System.Data;

namespace SimpleFeedly.Collections
{
    public class ListBigIntNumbersCollection : SqlStructureParamCollection<long>, IEnumerable<SqlDataRecord>
    {
        public ListBigIntNumbersCollection() : base(string.Empty, string.Empty) { }
        public ListBigIntNumbersCollection(string parametername) : base(parametername, "dbo.ListBigIntNumbers") { }

        IEnumerator<SqlDataRecord> IEnumerable<SqlDataRecord>.GetEnumerator()
        {
            var sqlRow = new SqlDataRecord(new SqlMetaData("Id", SqlDbType.BigInt));

            for (int i = 0; i < this.Count; i++)
            {
                sqlRow.SetInt64(0, this[i]);
                yield return sqlRow;
            }
        }
    }
}