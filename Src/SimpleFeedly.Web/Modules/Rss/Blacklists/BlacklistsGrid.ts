
namespace SimpleFeedly.Rss {

    @Serenity.Decorators.registerClass()
    export class BlacklistsGrid extends Serenity.EntityGrid<BlacklistsRow, any> {
        protected getColumnsKey() { return 'Rss.Blacklists'; }
        protected getDialogType() { return BlacklistsDialog; }
        protected getIdProperty() { return BlacklistsRow.idProperty; }
        protected getLocalTextPrefix() { return BlacklistsRow.localTextPrefix; }
        protected getService() { return BlacklistsService.baseUrl; }

        protected getInsertPermission() { return BlacklistsRow.insertPermission; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}