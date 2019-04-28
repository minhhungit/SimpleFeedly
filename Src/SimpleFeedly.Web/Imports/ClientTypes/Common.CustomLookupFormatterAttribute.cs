using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SimpleFeedly.Common
{
    public partial class CustomLookupFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "SimpleFeedly.Common.CustomLookupFormatter";

        public CustomLookupFormatterAttribute()
            : base(Key)
        {
        }

        public String LookupKey
        {
            get { return GetOption<String>("lookupKey"); }
            set { SetOption("lookupKey", value); }
        }
    }
}

