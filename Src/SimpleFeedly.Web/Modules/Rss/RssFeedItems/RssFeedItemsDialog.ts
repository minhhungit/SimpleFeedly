
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
            else {
                this.toolbar.findButton('block-feed-item').remove();
            }
        }

        protected updateInterface(): void {
            super.updateInterface();

            if (!this.isEditMode()) {
                this.element.remove();
                Q.notifyError("Add new is not allowed");
            }            
        }

        getToolbarButtons() {
            let buttons = super.getToolbarButtons();

            if (Authorization.hasPermission("Blacklists:Insert")) {
                buttons.push({
                    title: 'Block',
                    cssClass: "block-feed-item text-red",
                    icon: "fa fa-ban",
                    onClick: () => {
                        if (!this.isEditMode()) {
                            return;
                        }

                        if (!Authorization.hasPermission("Blacklists:Insert")) {
                            Q.alert("You have no permission for this action");
                            return;
                        }

                        Q.confirm('You want to block:\n   - Title: ' + J.escapeHtml(this.entity.Title) + '\n   - Channel: ' + J.escapeHtml(this.entity.RssChannelTitle) + ' ?',
                            () => {
                                RssFeedItemsService.AddBlacklistItem({ ChannelId: this.entity.ChannelId, FeedItemId: this.entity.Id, Title: this.entity.Title, IsDeleteFeedItem: true }, response => {
                                    Q.notifySuccess("ok");
                                    this.dialogClose();
                                });
                            },
                            {
                                title: 'Confirm',
                            });
                    }
                });
            }

            return buttons;
        }

        
    }
}