using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SimpleFeedly.Rss.Pages
{
    [RoutePrefix("Rss/Channel/Verify"), Route("{action=index}")]
    public class RssChannelTesterController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rss/RssChannelTester/RssChannelTesterIndex.cshtml");
        }
    }
}