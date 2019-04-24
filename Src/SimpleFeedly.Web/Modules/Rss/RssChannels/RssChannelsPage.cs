
namespace SimpleFeedly.Rss.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rss/RssChannels"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RssChannelsRow))]
    public class RssChannelsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rss/RssChannels/RssChannelsIndex.cshtml");
        }
    }
}