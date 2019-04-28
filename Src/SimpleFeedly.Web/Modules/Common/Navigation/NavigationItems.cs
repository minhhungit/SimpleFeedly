using Serenity.Navigation;
using Administration = SimpleFeedly.Administration.Pages;

//[assembly: NavigationLink(1000, "Dashboard", url: "~/", permission: "", icon: "fa-tachometer")]
[assembly: NavigationLink(2001, "Feed Items", typeof(SimpleFeedly.Rss.Pages.RssFeedItemsController), icon: "fa-rss")]
[assembly: NavigationLink(2002, "Channels", typeof(SimpleFeedly.Rss.Pages.RssChannelsController), icon: "fa-television")]
[assembly: NavigationLink(2003, "Channel Verifier", typeof(SimpleFeedly.Rss.Pages.RssChannelsVerifierController), icon: "fa-question-circle-o")]
[assembly: NavigationLink(2004, "Blacklists", typeof(SimpleFeedly.Rss.Pages.BlacklistsController), icon: "fa fa-ban")]