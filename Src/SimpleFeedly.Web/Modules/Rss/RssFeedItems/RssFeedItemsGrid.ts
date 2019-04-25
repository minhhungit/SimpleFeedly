
namespace SimpleFeedly.Rss {

    import fld = RssFeedItemsRow.Fields;

    @Serenity.Decorators.registerClass()
    export class RssFeedItemsGrid extends Serenity.EntityGrid<RssFeedItemsRow, any> {
        protected getColumnsKey() { return 'Rss.RssFeedItems'; }
        protected getDialogType() { return RssFeedItemsDialog; }
        protected getIdProperty() { return RssFeedItemsRow.idProperty; }
        protected getLocalTextPrefix() { return RssFeedItemsRow.localTextPrefix; }
        protected getService() { return RssFeedItemsService.baseUrl; }

        private rowSelection: Serenity.GridRowSelectionMixin;

        constructor(container: JQuery) {
            super(container);

            if (this.quickFiltersDiv) {
                this.quickFiltersDiv.hide();
            }

            $(".s-QuickSearchInput").css("width", "104px");
            $(".refresh-button").hide();
        }

        getAddButtonCaption() {
            return "New Feed";
        }

        protected createToolbarExtensions() {
            super.createToolbarExtensions();
            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
        }

        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {
            let filters = super.getQuickFilters();

            Q.first(filters, x => x.field == fld.IsChecked).init = w => {
                (w as Serenity.SelectEditor).value = "0"; // false
            };

            return filters;
        }

        private getSelectedItems(): RssFeedItemsRow[] {
            var ids = this.rowSelection.getSelectedKeys();
            let result: RssFeedItemsRow[] = [];

            for (let item of this.getItems()) {
                if (Q.any(ids, x => item.Id.toString() === x)) {
                    result.push(item);
                }
            }

            return result;
        }

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            buttons.unshift({
                title: '',
                cssClass: 'text-orange',
                icon: "fa fa-undo",
                separator: 'right',
                hint: 'Mark as unread',
                onClick: () => {
                    var selectedItems = this.getSelectedItems();


                    if (selectedItems === null || selectedItems === undefined || selectedItems.length === 0) {
                        return Q.warning("Please select at least one item");
                    }

                    return Q.confirm('Are you sure, mark them as un-checked?',
                        () => {
                            if (!this.onViewSubmit()) {
                                return;
                            }

                            $.each(selectedItems, (idx, item: RssFeedItemsRow) => {
                                RssFeedItemsService.MarkCheckedFeedItem({ FeedItemId: item.Id, IsChecked: false }, response => {
                                    this.rowSelection.resetCheckedAndRefresh();
                                });
                            })
                        },
                        {
                            title: 'Confirm',
                        });
                }
            });

            buttons.unshift({
                title: '',
                cssClass: 'text-green',
                icon: 'fa fa-check',
                hint: 'Mark as read',
                onClick: () => {
                    var selectedItems = this.getSelectedItems();


                    if (selectedItems === null || selectedItems === undefined || selectedItems.length === 0) {
                        return Q.warning("Please select at least one item");
                    }

                    return Q.confirm('Are you sure, mark them as checked?',
                        () => {
                            if (!this.onViewSubmit()) {
                                return;
                            }

                            $.each(selectedItems, (idx, item: RssFeedItemsRow) => {
                                RssFeedItemsService.MarkCheckedFeedItem({ FeedItemId: item.Id, IsChecked: true }, response => {
                                    this.rowSelection.resetCheckedAndRefresh();
                                });
                            })
                        },
                        {
                            title: 'Confirm',
                        });
                }
            });

            buttons.splice(0, 0, {
                title: 'All',
                cssClass: 'text-green',
                icon: 'fa fa-check-circle-o',
                separator: 'right',
                hint: 'Mark this page as read',
                onClick: () => {
                    var selectedItems = this.view.getItems();

                    if (selectedItems === null || selectedItems === undefined || selectedItems.length === 0) {
                        return Q.warning("Please select at least one item");
                    }

                    return Q.confirm('Mark checked for all items int this page?',
                        () => {
                            if (!this.onViewSubmit()) {
                                return;
                            }

                            RssFeedItemsService.MarkCheckedBatchFeedItems({ FeedItemIds: selectedItems.map(x => x.Id), IsChecked: true }, response => {
                                this.rowSelection.resetCheckedAndRefresh();
                            });
                        },
                        {
                            title: 'Confirm',
                        });
                }
            });

            buttons.push({
                title: '',
                icon: 'fa fa-filter text-blue',
                hint: 'Filters',
                onClick: () => {
                    this.quickFiltersDiv.slideToggle();
                }
            });


            return buttons;
        }

        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();

            columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));

            columns.splice(1, 0, {
                field: 'View Details',
                name: '',
                format: ctx => '<a class="inline-action view-details" title="view details"></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

            Q.first(columns, x => x.field == fld.Title).format = function (ctx: Slick.FormatterContext) {
                var currentItem: RssFeedItemsRow = ctx.item;
                return `<a href="` + currentItem.Link + `" class="customer-link" target="_blank">${Q.htmlEncode(ctx.value)}</a>`;
            }

            return columns;
        }

        protected onClick(e: JQueryEventObject, row: number, cell: number): void {
            // let base grid handle clicks for its edit links
            super.onClick(e, row, cell);

            // if base grid already handled, we shouldn"t handle it again
            if (e.isDefaultPrevented()) {
                return;
            }

            // get reference to current item
            var item: RssFeedItemsRow = this.itemAt(row);

            // get reference to clicked element
            var target = $(e.target);

            if (target.hasClass("customer-link")) {
                //e.preventDefault();

                RssFeedItemsService.MarkCheckedFeedItem({ FeedItemId: item.Id, IsChecked: true }, response => {
                    // console.log("marked");

                    this.refresh();
                });
            }
            else if (target.hasClass('view-details')) {
                this.editItem(item.Id);
            }
        }

        protected onViewProcessData(response) {
            var result = super.onViewProcessData(response);

            RssFeedItemsService.GetFeedItemCheckedState({}, res => {
                this.setTitle("Feeds (" + res.UnCheckedItems + " unchecked)");
            });

            return result;
        }

        protected getQuickSearchFields(): Serenity.QuickSearchField[] {
            return [
                { name: "", title: "All" },
                { name: fld.Title, title: "Title" },
                { name: fld.Description, title: "Description" }
            ];
        }


        protected getSlickOptions(): Slick.GridOptions {
            var opt = super.getSlickOptions();
            opt.rowHeight = 30;
            return opt;
        }

        protected getViewOptions() {
            var opt = super.getViewOptions();
            opt.rowsPerPage = 20;
            return opt;
        }

        protected getPersistanceStorage(): Serenity.SettingStorage {
            return new Common.UserPreferenceStorage();
        }

    }
}