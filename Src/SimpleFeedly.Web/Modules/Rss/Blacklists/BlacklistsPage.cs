
namespace SimpleFeedly.Rss.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rss/Blacklists"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BlacklistsRow))]
    public class BlacklistsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rss/Blacklists/BlacklistsIndex.cshtml");
        }
    }
}