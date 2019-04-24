namespace SimpleFeedly.Rss {
    export interface RssChannelsForm {
        Title: Serenity.StringEditor;
        Link: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        IsError: Serenity.BooleanEditor;
        ErrorMessage: Serenity.StringEditor;
    }

    export class RssChannelsForm extends Serenity.PrefixedContext {
        static formKey = 'Rss.RssChannels';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RssChannelsForm.init)  {
                RssChannelsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;

                Q.initFormType(RssChannelsForm, [
                    'Title', w0,
                    'Link', w0,
                    'Description', w0,
                    'IsError', w1,
                    'ErrorMessage', w0
                ]);
            }
        }
    }
}

