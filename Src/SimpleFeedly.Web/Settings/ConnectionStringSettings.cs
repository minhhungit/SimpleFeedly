using AppCfg;
using System.Data.SqlClient;

namespace SimpleFeedly
{
    public interface IConnectionStringSettings
    {
        [Option(Alias = "SimpleFeedlyConn")]
        SqlConnectionStringBuilder SimpleFeedly { get; }
    }
}
