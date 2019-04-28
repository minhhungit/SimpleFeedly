using Serenity.ComponentModel;
using System;

namespace SimpleFeedly.Common
{
    public partial class CustomLookupFormatterAttribute : CustomFormatterAttribute
    {
        public CustomLookupFormatterAttribute(string lookupkey)
            : base(Key)
        {
            this.LookupKey = lookupkey;
        }

        public CustomLookupFormatterAttribute(Type lookupType)
            : base(Key)
        {
            var attrs = lookupType.GetCustomAttributes(typeof(LookupScriptAttribute), true);
            if (attrs.Length > 0)
            {
                var lookupdef = attrs[0] as LookupScriptAttribute;
                if (lookupdef != null)
                {
                    this.LookupKey = lookupdef.Key;
                }
            }
            else
            {
                throw new Exception($"Type {nameof(lookupType)} does not have LookupScript attribute");
            }
        }
    }
}