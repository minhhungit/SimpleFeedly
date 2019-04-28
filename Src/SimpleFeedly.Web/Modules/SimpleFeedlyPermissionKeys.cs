using Serenity.Extensibility;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace SimpleFeedly
{
    public class PermissionKeys
    {
        [NestedPermissionKeys]
        [DisplayName("Channels")]
        public class Channels
        {
            [Description("Read")]
            public const string Read = "Channels:Read";

            [Description("Insert")]
            public const string Insert = "Channels:Insert";

            [Description("Update")]
            public const string Update = "Channels:Update";

            [Description("Delete")]
            public const string Delete = "Channels:Delete";

            [Description("Verifier")]
            public const string Verifier = "Channels:Verifier";
        }

        [NestedPermissionKeys]
        [DisplayName("FeedItems")]
        public class FeedItems
        {
            [Description("Read")]
            public const string Read = "FeedItems:Read";

            [Description("Insert")]
            public const string Insert = "FeedItems:Insert";

            [Description("Update")]
            public const string Update = "FeedItems:Update";

            [Description("Delete")]
            public const string Delete = "FeedItems:Delete";
        }

        [NestedPermissionKeys]
        [DisplayName("Blacklists")]
        public class Blacklists
        {
            [Description("Read")]
            public const string Read = "Blacklists:Read";

            [Description("Insert")]
            public const string Insert = "Blacklists:Insert";

            [Description("Insert Batch")]
            public const string InsertBatch = "Blacklists:InsertBatch";

            [Description("Update")]
            public const string Update = "Blacklists:Update";

            [Description("Delete")]
            public const string Delete = "Blacklists:Delete";
        }
    }
}