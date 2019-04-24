
namespace SimpleFeedly.Rss {

    @Serenity.Decorators.registerClass()
    export class RssChannelsGrid extends Serenity.EntityGrid<RssChannelsRow, any> {
        protected getColumnsKey() { return 'Rss.RssChannels'; }
        protected getDialogType() { return RssChannelsDialog; }
        protected getIdProperty() { return RssChannelsRow.idProperty; }
        protected getLocalTextPrefix() { return RssChannelsRow.localTextPrefix; }
        protected getService() { return RssChannelsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        getAddButtonCaption() {
            return "New Channel";
        }
    }
}