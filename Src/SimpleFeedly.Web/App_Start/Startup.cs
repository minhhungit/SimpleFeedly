using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SimpleFeedly.App_Start.Startup))]
namespace SimpleFeedly.App_Start
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            //ConfigureAuth(app);

            var hubConfiguration = new HubConfiguration {EnableDetailedErrors = HttpContext.Current.IsDebuggingEnabled};

            app.MapSignalR(hubConfiguration);

            //GlobalHost.Configuration.ConnectionTimeout = TimeSpan.FromSeconds(50);
        }
    }
}
