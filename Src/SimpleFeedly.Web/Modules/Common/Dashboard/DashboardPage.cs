
namespace SimpleFeedly.Common.Pages
{
    using HtmlAgilityPack;
    using Serenity;
    using Serenity.Data;
    using System;
    using System.Linq;
    using System.Text.RegularExpressions;
    using System.Web.Mvc;
    using System.Xml;

    [RoutePrefix("Dashboard"), Route("{action=index}")]
    public class DashboardController : Controller
    {
        [Authorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {           
            //using (var connection = SqlConnections.NewFor<Rss.Entities.RssFeedItemsRow>())
            //{
            //    var entity = new Rss.Endpoints.RssFeedItemsController().Retrieve(connection, new Serenity.Services.RetrieveRequest { EntityId = 14 }).Entity;
            //    var desc = entity.Description;
            //    var content = entity.Content;

            //    string imageUrl = string.Empty;
            //    //string pattern = @"<img\s+[^>]*?src=('|')([^'']+)\1";
            //    string pattern = "<img.+?src=[\"'](.+?)[\"'].*?>";

            //    Regex myRegex = new Regex(pattern, RegexOptions.IgnoreCase);

            //    if (!string.IsNullOrWhiteSpace(desc))
            //    {
            //        try
            //        {
            //            Match m = myRegex.Match(desc);

            //            if (m.Success && m.Groups.Count >= 2)
            //            {
            //                var tmp = m.Groups[1]?.Value ?? string.Empty;
            //                if (!string.IsNullOrWhiteSpace(tmp))
            //                {
            //                    var test = tmp;
            //                }
            //            }
            //        }
            //        catch { }
            //    }

            //    if (!string.IsNullOrWhiteSpace(content))
            //    {
            //        try
            //        {
            //            Match m = myRegex.Match(content);

            //            if (m.Success && m.Groups.Count >= 2)
            //            {
            //                var tmp = m.Groups[1]?.Value ?? string.Empty;
            //                if (!string.IsNullOrWhiteSpace(tmp))
            //                {
            //                    var test = tmp;
            //                }
            //            }
            //        }
            //        catch { }
            //    }

            //    try
            //    {
            //        var doc = new HtmlWeb().Load(entity.Link ?? string.Empty);

            //        //Get value from given xpath
            //        string xpath = "//meta[@property='og:image']";

            //        var ogImage = doc.DocumentNode.SelectSingleNode(xpath);
            //        var src = ogImage?.Attributes["content"]?.Value?.ToString() ?? string.Empty;
            //        if (!string.IsNullOrWhiteSpace(src))
            //        {
            //            var test = src;
            //        }

            //        if (string.IsNullOrWhiteSpace(src))
            //        {
            //            Match m = myRegex.Match(doc.Text);

            //            if (m.Success && m.Groups.Count >= 2)
            //            {
            //                var tmp = m.Groups[1]?.Value ?? string.Empty;
            //                if (!string.IsNullOrWhiteSpace(tmp))
            //                {
            //                    var test = tmp;

            //                    if (!test.StartsWith("http"))
            //                    {
            //                        var xxxx= System.IO.Path.Combine(entity.Link.TrimEnd("/"), test.TrimStart());
            //                    }
            //                    else
            //                    {

            //                    }
            //                }
            //            }
            //        }
            //    }
            //    catch
            //    {

            //    }
            //}


            //XmlReaderSettings settings = new XmlReaderSettings();
            //using (var reader = XmlReader.Create("https://damienbod.com/feed/", settings))
            //{
            //    var feed = System.ServiceModel.Syndication.SyndicationFeed.Load(reader);
            //    var xx = feed.Items.ToList();
            //    var a = xx[0];
            //}

            return Redirect("~/Rss/FeedItems");
            //return View(MVC.Views.Common.Dashboard.DashboardIndex, new DashboardPageModel());
        }

        //public string GetFeedCoverImage()
        //{
        //    var Description = string.Empty;
        //    var Content = "";
        //    var XmlData = string.Empty;

        //    string imageUrl = string.Empty;

        //    string pattern = @"<(img)\b[^>]*>";

        //    Regex rgx = new Regex(pattern, RegexOptions.IgnoreCase);

        //    if (!string.IsNullOrWhiteSpace(Description))
        //    {
        //        var matches = rgx.Matches(Description);
        //        if (matches.Count > 0)
        //        {
        //            return matches[0].Value;
        //        }
        //    }

        //    if (!string.IsNullOrWhiteSpace(Content))
        //    {
        //        var matches = rgx.Matches(Content);
        //        if (matches.Count > 0)
        //        {
        //            return matches[0].Value;
        //        }
        //    }

        //    if (!string.IsNullOrWhiteSpace(XmlData))
        //    {
        //        var matches = rgx.Matches(XmlData);
        //        if (matches.Count > 0)
        //        {
        //            return matches[0].Value;
        //        }
        //    }

        //    return imageUrl;
        //}
    }
}
