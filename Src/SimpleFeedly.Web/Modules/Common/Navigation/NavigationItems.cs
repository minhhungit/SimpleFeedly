using Serenity.Navigation;
using Administration = SimpleFeedly.Administration.Pages;

//[assembly: NavigationLink(1000, "Dashboard", url: "~/", permission: "", icon: "fa-tachometer")]
[assembly: NavigationLink(2001, "Rss Feeds", typeof(SimpleFeedly.Rss.Pages.RssFeedItemsController), icon: "fa-rss")]
[assembly: NavigationLink(2002, "Rss Channels", typeof(SimpleFeedly.Rss.Pages.RssChannelsController), icon: "fa-television")]
[assembly: NavigationLink(2003, "Rss Channel Verifier", typeof(SimpleFeedly.Rss.Pages.RssChannelVerifierController), icon: "fa-question-circle-o")]