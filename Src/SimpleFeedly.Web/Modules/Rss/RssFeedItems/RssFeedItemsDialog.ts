
namespace SimpleFeedly.Rss {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class RssFeedItemsDialog extends Serenity.EntityDialog<RssFeedItemsRow, any> {
        protected getFormKey() { return RssFeedItemsForm.formKey; }
        protected getIdProperty() { return RssFeedItemsRow.idProperty; }
        protected getLocalTextPrefix() { return RssFeedItemsRow.localTextPrefix; }
        protected getNameProperty() { return RssFeedItemsRow.nameProperty; }
        protected getService() { return RssFeedItemsService.baseUrl; }

        protected form = new RssFeedItemsForm(this.idPrefix);

        afterLoadEntity() {
            super.afterLoadEntity();

            if (this.isEditMode()) {
                Serenity.EditorUtils.setReadOnly(this.form.ChannelId, true);
            }
        }
    }
}