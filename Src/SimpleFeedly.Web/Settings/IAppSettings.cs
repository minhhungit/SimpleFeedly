using AppCfg;
using System.Data.SqlClient;

namespace SimpleFeedly.Settings
{
    public interface IAppSettings
    {
        IConnectionSettings Connections { get; }
    }

    public interface IConnectionSettings
    {
        [Option(Alias = "SimpleFeedlyConn")]
        SqlConnectionStringBuilder SimpleFeedly { get; }
    }
}
