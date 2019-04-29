namespace SimpleFeedly.Rss {
    export interface BlacklistsForm {
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
                var w0 = s.StringEditor;

                Q.initFormType(BlacklistsForm, [
                    'Title', w0
                ]);
            }
        }
    }
}

