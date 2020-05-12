/// <reference path="../../common/mixins/gridpaging/custompagerwithonlynextpreviousmixin.ts" />

namespace SimpleFeedly.Rss {

    import fld = RssFeedItemsRow.Fields;

    @Serenity.Decorators.registerClass()
    export class RssFeedItemsGrid extends Serenity.EntityGrid<RssFeedItemsRow, any> {
        protected getColumnsKey() { return 'Rss.RssFeedItems'; }
        protected getDialogType() { return RssFeedItemsDialog; }
        protected getIdProperty() { return RssFeedItemsRow.idProperty; }
        protected getLocalTextPrefix() { return RssFeedItemsRow.localTextPrefix; }
        protected getService() { return RssFeedItemsService.baseUrl; }

        protected getInsertPermission() { return RssFeedItemsRow.insertPermission; }

        private rowSelection: Serenity.GridRowSelectionMixin;
        private _pagerMixin: Common.CustomPagerWithOnlyNextPreviousMixin<RssFeedItemsRow>;
        private cardContainer: JQuery;
        private nbrNotCheckedItems: JQuery = $(`<span style="margin-left: 10px; font-size: 20px; color: #f1f1f1; display: none; line-height: 50px; border: dashed 1px #DDD; padding: 2px" />`);

        private isCalled: boolean;

        constructor(container: JQuery) {
            super(container);

            this.nbrNotCheckedItems.insertAfter($(".sidebar-toggle"));

            $('body').addClass('sidebar-collapse');

            $(".grid-title").hide();

            if (this.quickFiltersDiv) {
                this.quickFiltersDiv.hide();
            }

            if (J.isMobile()) {
                
                $(".s-QuickSearchInput").css("width", "110px");
                $(".refresh-button").hide();

                $(".tool-buttons").css("position", "fixed").css("z-index", "9998").css("right", "10px").css("bottom", "100px").css("background", "gray");

            } else {
                $(".s-QuickSearchInput").css("width", "170px");
            }

            (function adjustContainerWidth() {
                setTimeout(function () {
                    if (!$(".card-container").hasClass("card-container-full-width")) {
                        $(".card-container").addClass("card-container-full-width");
                    }
                    else {
                        adjustContainerWidth();
                    }
                }, 100);
            })();

            if (J.isMobile()) {
                (function adjustContainerHeight() {
                    setTimeout(function () {
                        if (!$(".card-container").hasClass("card-container-height-auto")) {
                            $(".card-container").addClass("card-container-height-auto");
                        }
                        else {
                            adjustContainerHeight();
                        }
                    }, 100);
                })();
            }
        }

        getAddButtonCaption() {
            return "New Feed";
        }

        protected onViewSubmit() {
            if (!super.onViewSubmit()) {
                return false;
            }

            // in the first times it will load data for grid view, we just need to call endpoint to load data for card view
            if (typeof this.isCalled == 'undefined') {
                this.isCalled = true;
                return false;
            }

            var request = this.view.params as Common.MyBaseListRequest;
            request.EnableOnlyNextPreviousMode = this._pagerMixin.getCurrentPagerMode() == 'next-previous-only';
            return true;
        }


        protected createToolbarExtensions() {
            super.createToolbarExtensions();

            this.rowSelection = new Serenity.GridRowSelectionMixin(this);

            this._pagerMixin = new Common.CustomPagerWithOnlyNextPreviousMixin({
                grid: this,
                rowPerPage: this.getPagerOptions().rowsPerPage
            });

            var editItemEvt = this.editItem.bind(this);

            this.element.children('.grid-container').empty().hide();

            this.cardContainer = $('<div class="card-container"></div>')
                .insertAfter(this.element.children('.grid-container'));

            (this.view as any).onDataChanged.subscribe(() => {
                this.updateItems(editItemEvt);
            });

            this.updateItems(editItemEvt);
        }

        private updateItems(editItemClickEvt: (item: RssFeedItemsRow) => void) {
            ReactDOM.render(React.createElement(RssFeedCard, { items: this.getItems(), editItemClickEvt: editItemClickEvt }), this.cardContainer[0]);
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
                title: J.isMobile() ? '' : 'Mark as unread',
                cssClass: 'text-orange',
                icon: "fa fa-undo",
                separator: 'right',
                hint: 'Mark as unread',
                onClick: () => {
                    if (!Authorization.hasPermission("FeedItems:MarkAsReadAndUnread")) {
                        Q.alert("This action is not allowed");
                        return;
                    }

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
                                RssFeedItemsService.MarkCheckedFeedItem({ Id: item.Id, IsChecked: false }, response => {
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
                title: J.isMobile() ? '' : 'Mark as read',
                cssClass: 'text-green',
                icon: 'fa fa-check',
                hint: 'Mark as read',
                onClick: () => {
                    if (!Authorization.hasPermission("FeedItems:MarkAsReadAndUnread")) {
                        Q.alert("This action is not allowed");
                        return;
                    }

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
                                RssFeedItemsService.MarkCheckedFeedItem({ Id: item.Id, IsChecked: true }, response => {
                                    this.rowSelection.resetCheckedAndRefresh();
                                });
                            });
                        },
                        {
                            title: 'Confirm',
                        });
                }
            });

            buttons.splice(0, 0, {
                title: J.isMobile() ? '' : 'Page as read',
                cssClass: 'text-green text-bold',
                icon: 'fa fa-check-square-o',
                separator: 'right',
                hint: 'Mark this page as read',
                onClick: () => {
                    if (!Authorization.hasPermission("FeedItems:MarkAsReadAndUnread")) {
                        Q.alert("This action is not allowed");
                        return;
                    }

                    var selectedItems = this.view.getItems();

                    if (selectedItems === null || selectedItems === undefined || selectedItems.length === 0) {
                        return Q.warning("Please select at least one item");
                    }

                    return Q.confirm('Mark checked for all items of this page?',
                        () => {
                            if (!this.onViewSubmit()) {
                                return;
                            }

                            RssFeedItemsService.MarkCheckedBatchFeedItems({ Ids: selectedItems.map(x => x.Id), IsChecked: true }, response => {
                                this.rowSelection.resetCheckedAndRefresh();
                                if (J.isMobile()) {
                                    J.goToByScroll(this.element);
                                }
                            });
                        },
                        {
                            title: 'Confirm',
                        });
                }
            });
            
            if (!J.isMobile()) {
                buttons.splice(1, 0, {
                    title: J.isMobile() ? '' : 'Block',
                    cssClass: 'text-red text-bold',
                    icon: 'fa fa-ban',
                    separator: 'right',
                    hint: 'Block feed items',
                    onClick: () => {
                        if (!Authorization.hasPermission("FeedItems:BlockFeedItem")) {
                            Q.alert("This action is not allowed");
                            return;
                        }

                        var selectedItems = this.getSelectedItems();

                        if (selectedItems === null || selectedItems === undefined || selectedItems.length === 0) {
                            return Q.warning("Please select at least one item");
                        }

                        return Q.confirm('Are you sure you want to block these items?',
                            () => {
                                if (!this.onViewSubmit()) {
                                    return;
                                }
                                var data: Models.BlacklistItem[] = [];
                                selectedItems.forEach((item, idx) => {
                                    data.push({ FeedItemId: item.Id, Title: item.Title });
                                });

                                RssFeedItemsService.AddBlacklistItems({ FeedItems: data, IsDeleteFeedItem: true }, response => {
                                    Q.notifySuccess("ok");
                                    this.rowSelection.resetCheckedAndRefresh();
                                });
                            },
                            {
                                title: 'Confirm',
                            });
                    }
                });              
            }

            buttons.push({
                title: '',
                icon: 'fa fa-filter text-blue',
                hint: 'Filters',
                onClick: () => {
                    this.quickFiltersDiv.slideToggle();
                }
            });

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "column-picker-button"), 1);

            return buttons;
        }

        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();

            let selectionCol = Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection);
            selectionCol.width = 27; // fix IE: dot issue
            columns.splice(0, 0, selectionCol);

            columns.splice(1, 0, {
                field: 'View Details',
                name: '',
                format: ctx => '<a class="inline-action view-details" title="view details"></a>',
                sortable: false,
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

            if (Authorization.hasPermission("FeedItems:BlockFeedItem")) {
                columns.splice(2, 0, {
                    field: 'Block Feed Item',
                    name: '',
                    sortable: false,
                    format: ctx => '<a class="inline-action block-feed-item" title="block feed item"><i class="fa fa-ban link-muted"></i></a>',
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
            }            

            Q.first(columns, x => x.field == fld.Title).format = function (ctx: Slick.FormatterContext) {
                var currentItem: RssFeedItemsRow = ctx.item;
                return `<a href="` + currentItem.Link + `" class="open-feed-item" target="_blank">${Q.htmlEncode(ctx.value)}</a>`;
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

            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('view-details')) {
                    this.editItem(item.Id);
                }
                else if (target.hasClass('block-feed-item')) {

                    if (!Authorization.hasPermission("Blacklists:Insert")) {
                        Q.alert("You have no permission for this action");
                        return;
                    }

                    Q.confirm('You want to block:\n   - Title: ' + J.escapeHtml(item.Title) + '\n   - Channel: ' + J.escapeHtml(item.RssChannelTitle) + ' ?',
                        () => {
                            if (!this.onViewSubmit()) {
                                return;
                            }

                            RssFeedItemsService.AddBlacklistItem({ ChannelId: item.ChannelId, FeedItemId: item.Id, Title: item.Title, IsDeleteFeedItem: true }, response => {
                                Q.notifySuccess("ok");
                                this.refresh();
                            });
                        },
                        {
                            title: 'Confirm',
                        });
                } 
            }
            else {
                if (target.hasClass("open-feed-item")) {
                    //e.preventDefault();

                    RssFeedItemsService.MarkCheckedFeedItem({ Id: item.Id, IsChecked: true }, response => {
                        // console.log("marked");

                        this.refresh();
                    });
                }
            }
        }

        protected onViewProcessData(response) {
            var result = super.onViewProcessData(response);

            RssFeedItemsService.GetFeedItemCheckedState({}, res => {
                //this.titleDiv.find(".title-text").text("Feed Items (" + res.UnCheckedItems + " unchecked)");

                this.nbrNotCheckedItems.text(`${res.UnCheckedItems}`).fadeIn('slow');
            });

            this._pagerMixin.updateNextButton(result.Entities.length, response.Take);

            return result;
        }

        //protected getQuickSearchFields(): Serenity.QuickSearchField[] {
        //    return [
        //        { name: fld.Title, title: "Title" },
        //        { name: fld.Description, title: "Description" },
        //        { name: "", title: "All" }
        //    ];
        //}


        protected getSlickOptions(): Slick.GridOptions {
            var opt = super.getSlickOptions();
            opt.rowHeight = 29;
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