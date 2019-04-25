using Serenity.Data;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SimpleFeedly.Rss.Pages
{
    [RoutePrefix("Rss/ChannelsVerifier"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Channels.Verifier)]
    public class RssChannelsVerifierController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rss/RssChannelsVerifier/RssChannelsVerifierIndex.cshtml");
        }
    }
}