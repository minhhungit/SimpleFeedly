namespace SimpleFeedly.Rss {
    export interface BlacklistsForm {
        ChannelId: Serenity.LookupEditor;
        Title: Serenity.StringEditor;
    }

    export class BlacklistsForm extends Serenity.PrefixedContext {
        static formKey = 'Rss.Blacklists';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BlacklistsForm.init)  {
                BlacklistsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(BlacklistsForm, [
                    'ChannelId', w0,
                    'Title', w1
                ]);
            }
        }
    }
}

