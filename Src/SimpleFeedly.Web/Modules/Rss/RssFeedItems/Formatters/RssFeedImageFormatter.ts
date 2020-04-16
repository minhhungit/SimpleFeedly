
namespace SimpleFeedly.Rss {

    @Serenity.Decorators.registerFormatter()
    export class RssFeedImageFormatter implements Slick.Formatter, Serenity.IInitializeColumn {

        format(ctx: Slick.FormatterContext): string {

            let url = (this.fileProperty ? ctx.item[this.fileProperty] : ctx.value) as string;

            return `<a class="inline-image" target='_blank' >` +
                `<img src="${url}" style='max-height: 100%; max-width: 100%;' /></a>`;
        }

        initializeColumn(column: Slick.Column): void {
            if (this.fileProperty) {
                column.referencedFields = column.referencedFields || [];
                column.referencedFields.push(this.fileProperty);
            }
        }

        @Serenity.Decorators.option()
        public fileProperty: string;
    }
}