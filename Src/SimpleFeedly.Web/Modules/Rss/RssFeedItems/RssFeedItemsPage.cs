
namespace SimpleFeedly.Rss.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rss/FeedItems"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RssFeedItemsRow))]
    public class RssFeedItemsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rss/RssFeedItems/RssFeedItemsIndex.cshtml");
        }
    }
}