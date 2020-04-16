namespace SimpleFeedly.Rss {
    export interface RssFeedItemsForm {
        ChannelId: Serenity.LookupEditor;
        IsChecked: Serenity.BooleanEditor;
        FeedItemKey: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Link: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        PublishingDate: Serenity.DateEditor;
        Author: Serenity.StringEditor;
        Content: Serenity.HtmlContentEditor;
        CoverImageUrl: Serenity.StringEditor;
    }

    export class RssFeedItemsForm extends Serenity.PrefixedContext {
        static formKey = 'Rss.RssFeedItems';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RssFeedItemsForm.init)  {
                RssFeedItemsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.BooleanEditor;
                var w2 = s.StringEditor;
                var w3 = s.TextAreaEditor;
                var w4 = s.DateEditor;
                var w5 = s.HtmlContentEditor;

                Q.initFormType(RssFeedItemsForm, [
                    'ChannelId', w0,
                    'IsChecked', w1,
                    'FeedItemKey', w2,
                    'Title', w2,
                    'Link', w2,
                    'Description', w3,
                    'PublishingDate', w4,
                    'Author', w2,
                    'Content', w5,
                    'CoverImageUrl', w2
                ]);
            }
        }
    }
}

