
namespace SimpleFeedly.Rss {

    @Serenity.Decorators.registerClass()
    export class RssChannelsDialog extends Serenity.EntityDialog<RssChannelsRow, any> {
        protected getFormKey() { return RssChannelsForm.formKey; }
        protected getIdProperty() { return RssChannelsRow.idProperty; }
        protected getLocalTextPrefix() { return RssChannelsRow.localTextPrefix; }
        protected getNameProperty() { return RssChannelsRow.nameProperty; }
        protected getService() { return RssChannelsService.baseUrl; }

        protected form = new RssChannelsForm(this.idPrefix);

        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (this.isNew()) {
                this.form.IsError.getGridField().toggle(false);
                this.form.ErrorMessage.getGridField().toggle(false);
            }
        }
    }
}