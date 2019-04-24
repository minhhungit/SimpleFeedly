using System.Collections.Generic;
using System.Data;
using Dapper;
using System.Data.SqlClient;

namespace SimpleFeedly.Core.Collections
{
    public abstract class SqlStructureParamCollection<T> : List<T>, SqlMapper.IDynamicParameters
    {
        private string paramname;
        private string sqlstructypename;
        public SqlStructureParamCollection(string paramname, string sqlstructypename)
        {
            this.paramname = paramname;
            this.sqlstructypename = sqlstructypename;
        }

        public void AddParameters(IDbCommand command, SqlMapper.Identity identity)
        {
            if (this.Count > 0)
            {
                var sqlCommand = (SqlCommand)command;

                // Add the table parameter.
                var p = sqlCommand.Parameters.Add(this.paramname, SqlDbType.Structured);
                p.Direction = ParameterDirection.Input;
                p.TypeName = this.sqlstructypename;
                p.Value = this;
            }
        }
    }
}
