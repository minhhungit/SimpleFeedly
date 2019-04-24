using Serenity.Navigation;
using Administration = SimpleFeedly.Administration.Pages;

//[assembly: NavigationLink(1000, "Dashboard", url: "~/", permission: "", icon: "fa-tachometer")]
[assembly: NavigationLink(2001, "Rss Channels", typeof(SimpleFeedly.Rss.Pages.RssChannelsController), icon: "fa-television")]
[assembly: NavigationLink(2002, "Rss Feeds", typeof(SimpleFeedly.Rss.Pages.RssFeedItemsController), icon: "fa-rss")]

[assembly: NavigationLink(5000, "Test Channel", typeof(SimpleFeedly.Rss.Pages.RssChannelTesterController), icon: "fa-question-circle-o")]