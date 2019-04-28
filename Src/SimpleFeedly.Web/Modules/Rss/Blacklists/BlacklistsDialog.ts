
namespace SimpleFeedly.Rss {

    @Serenity.Decorators.registerClass()
    export class BlacklistsDialog extends Serenity.EntityDialog<BlacklistsRow, any> {
        protected getFormKey() { return BlacklistsForm.formKey; }
        protected getIdProperty() { return BlacklistsRow.idProperty; }
        protected getLocalTextPrefix() { return BlacklistsRow.localTextPrefix; }
        protected getNameProperty() { return BlacklistsRow.nameProperty; }
        protected getService() { return BlacklistsService.baseUrl; }

        protected form = new BlacklistsForm(this.idPrefix);

    }
}