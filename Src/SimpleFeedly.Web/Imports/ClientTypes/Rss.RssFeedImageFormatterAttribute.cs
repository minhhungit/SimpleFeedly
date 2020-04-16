using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SimpleFeedly.Rss
{
    public partial class RssFeedImageFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "SimpleFeedly.Rss.RssFeedImageFormatter";

        public RssFeedImageFormatterAttribute()
            : base(Key)
        {
        }

        public String FileProperty
        {
            get { return GetOption<String>("fileProperty"); }
            set { SetOption("fileProperty", value); }
        }
    }
}

