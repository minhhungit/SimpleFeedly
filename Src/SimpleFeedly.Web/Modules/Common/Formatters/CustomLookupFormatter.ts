
namespace SimpleFeedly.Common {

    @Serenity.Decorators.registerFormatter()
    export class CustomLookupFormatter
        implements Slick.Formatter{

        format(ctx: Slick.FormatterContext): string {
            var result = ctx.value;
            var lookup = Q.getLookup(this.lookupKey);
            lookup.items.some((item, idx) => {
               
                var textValue = item[lookup.textField];
                var text = ((ss as any).isNullOrUndefined(textValue) ? '' : textValue.toString());
                var idValue = item[lookup.idField];
                var id = ((ss as any).isNullOrUndefined(idValue) ? '' : idValue.toString());
                if (id == ctx.value) {
                    result = text;
                    return true;
                }

                return false;
            });
            return result;
        }

        @Serenity.Decorators.option()
        public lookupKey: string;
    }
}
