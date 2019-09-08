using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SimpleFeedly.Common
{
    public class MyBaseListRequest : ListRequest, IPagingRequest
    {
        public bool EnableOnlyNextPreviousMode { get; set; }
    }
}