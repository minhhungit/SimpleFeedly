
namespace SimpleFeedly.Common {

    export class CustomPagerWithOnlyNextPreviousMixin<TItem> {

        private options: CustomPagerWithOnlyNextPreviousMixinOptions<TItem>;
        private dataGrid: Serenity.DataGrid<TItem, any>;

        private _customPagerCurrentPage: number = 1;
        private _customPager: JQuery = $("<span class='next-previous-pager'><button class='custompager-pre'><strong>«</strong> Previous</button><span style='padding: 0 2px;'></span><button class='custompager-next'>Next <strong>»</strong></button><span style='padding: 0 2px;'></span><b>Page</b> <span class='custompager-curpage'>1</span></span>");
        private _originalPager = $(".s-SlickPager");
        private _pagingMode: ('full' | 'next-previous-only');
        private _btnSwitch: JQuery;

        constructor(options: CustomPagerWithOnlyNextPreviousMixinOptions<TItem>) {

            var self = this;
            this.options = options;
            var dg = this.dataGrid = options.grid;
            this._pagingMode = options.pagingMode = options.pagingMode || 'next-previous-only';
            $(".slick-pg-in").hide();

            this._originalPager.find(".slick-pg-in").append(this._customPager);

            var btnSwitch = this._btnSwitch = $('<input type="checkbox" title="Full Pager" class="paging-mode-switch pull-right" style="margin-right: 5px" ' + (options.pagingMode == "full" ? ' checked' : '') + '/>')
                .appendTo(dg.element.find(".slick-pg-in"));

            btnSwitch.change((evt) => {

                var isFullMode: boolean = $(evt.target).is(":checked");

                // update current page number
                if (!isFullMode) {
                    this._customPagerCurrentPage = parseInt($(".slick-pg-current").val());
                    this._originalPager.find(".custompager-curpage").text($(".slick-pg-current").val());
                }

                this.switchView(isFullMode ? 'full' : 'next-previous-only');
            });

            this._originalPager.find(".custompager-pre").click(e => {
                if (this._customPagerCurrentPage > 1) {
                    this._customPagerCurrentPage--;
                    this.dataGrid.view.seekToPage = this._customPagerCurrentPage;
                    this.dataGrid.refresh();
                    this._originalPager.find(".custompager-curpage").text(this._customPagerCurrentPage);
                }
                return;
            });

            this._originalPager.find(".custompager-next").click(e => {
                this._customPagerCurrentPage++;
                this.dataGrid.view.seekToPage = this._customPagerCurrentPage;
                this.dataGrid.refresh();
                this._originalPager.find(".custompager-curpage").text(this._customPagerCurrentPage);
                return;
            });

            dg.view.onDataChanged.subscribe(() => {
                this.updatePageControls(!$(this._btnSwitch).is(":checked"));
            });

            // save setting
            var oldCurrentSettings = (dg as any).getCurrentSettings;

            (dg as any).getCurrentSettings = function (flag) {
                var settings = oldCurrentSettings.apply(dg, [flag]);
                settings['customPagerMode'] = $(btnSwitch).is(":checked") ? 'full' : 'next-previous-only';

                return settings;
            };

            var oldRestoreSettings = (dg as any).restoreSettings;

            (dg as any).restoreSettings = function (settings, flags) {
                oldRestoreSettings.apply(dg, [settings, flags]);
                if (settings == null) {
                    var storage = this.getPersistanceStorage();
                    if (storage == null) {
                        self.switchView(self._pagingMode);
                        return;
                    }
                    var json = Q.trimToNull(storage.getItem(this.getPersistanceKey()));
                    if (!json) {
                        self.switchView(self._pagingMode);
                        return;
                    }
                    settings = JSON.parse(json);
                }


                var viewPagerMode = settings.customPagerMode || self._pagingMode;
                var currentViewPagerMode = $(btnSwitch).is(":checked") ? 'full' : 'next-previous-only';

                if (viewPagerMode != currentViewPagerMode) {
                    $(btnSwitch).click();
                }
            };
        }

        public updateNextButton(nbrOfRecords: number, nbrOfRowsPerPage: number): void {
            if (this.options.pagingMode === 'full') {
                return;
            }

            if (nbrOfRecords == 0 || nbrOfRecords < nbrOfRowsPerPage) {
                this._originalPager.find(".custompager-next").prop("disabled", true);
                this._originalPager.find(".custompager-next").css("opacity", 0.5);
            }
            else {
                this._originalPager.find(".custompager-next").prop("disabled", false);
                this._originalPager.find(".custompager-next").css("opacity", 1);
            }
        }

        private switchView(pMode: ('full' | 'next-previous-only')): void {
            this.updatePageControls(pMode == "next-previous-only");
            this.dataGrid.refresh();
            (this.dataGrid as any).persistSettings();
        }

        private updatePageControls(isNextPreviousOnlyMode: boolean) {
            if (isNextPreviousOnlyMode) {
                this._originalPager.find(".next-previous-pager").show();
                this._originalPager.find(".slick-pg-grp").hide();
                this._originalPager.find(".slick-pg-sep").hide();
                this._originalPager.find(".slick-pg-grp:first").show();
            }
            else {
                this._originalPager.find(".next-previous-pager").hide();
                this._originalPager.find(".slick-pg-grp").show();
                this._originalPager.find(".slick-pg-sep").show();
            }

            $(".slick-pg-in").show();
        }

        public getCurrentPagerMode(): ('full' | 'next-previous-only') {
            return $(this._btnSwitch).is(":checked") ? 'full' : 'next-previous-only';
        }
    }

    export class CustomPagerWithOnlyNextPreviousMixinOptions<TItem> {
        grid: Serenity.DataGrid<TItem, any>;
        rowPerPage: number;
        pagingMode?: ('full' | 'next-previous-only');
    }
} 