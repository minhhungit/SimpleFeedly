using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SimpleFeedly.Common
{
    public interface IPagingRequest
    {
        bool EnableOnlyNextPreviousMode { get; set; }
    }
}