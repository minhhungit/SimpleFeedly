using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SimpleFeedly.Rss.Pages
{
    [RoutePrefix("Rss/Channel/Verifier"), Route("{action=index}")]
    public class RssChannelVerifierController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rss/RssChannelVerifier/RssChannelVerifierIndex.cshtml");
        }
    }
}