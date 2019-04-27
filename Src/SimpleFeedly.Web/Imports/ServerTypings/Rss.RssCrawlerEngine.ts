namespace SimpleFeedly.Rss {
    export enum RssCrawlerEngine {
        SyndicationFeed = 1,
        CodeHollowFeedReader = 2,
        ParseRssByXml = 3
    }
    Serenity.Decorators.registerEnumType(RssCrawlerEngine, 'SimpleFeedly.Rss.RssCrawlerEngine');
}

