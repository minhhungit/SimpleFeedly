using AppCfg;
using AppCfg.TypeParsers;
using System;
using System.Collections.Generic;

namespace SimpleFeedly.Crawler
{
    public class TimeToRunItem
    {
        public TimeToRunItem(TimeSpan start, TimeSpan end)
        {
            Start = start;
            End = end;
        }

        public TimeSpan Start { get; set; }
        public TimeSpan End { get; set; }
    }

    public class TimeToRunParser : ITypeParser<TimeToRunItem[]> // INT is numberTaskToRun
    {
        // FORMAT: 20:30:01,23:59:02|20:30:01,23:59:02
        public TimeToRunItem[] Parse(string rawValue, ITypeParserOptions options)
        {
            var result = new List<TimeToRunItem>();
            var tsRange = rawValue.Split('|');
            foreach (var item in tsRange)
            {
                var arr = item.Split(',');

                TimeSpan start;
                TimeSpan end;

                if (options.InputFormat == null)
                {
                    start = TimeSpan.Parse(arr[0], TypeParserSettings.DefaultCulture);
                    end = TimeSpan.Parse(arr[1], TypeParserSettings.DefaultCulture);
                }
                else
                {
                    start = TimeSpan.ParseExact(arr[0], options.InputFormat, TypeParserSettings.DefaultCulture);
                    end = TimeSpan.ParseExact(arr[1], options.InputFormat, TypeParserSettings.DefaultCulture);
                }

                if (start != null && end != null)
                {
                    if (start <= end)
                    {
                        result.Add(new TimeToRunItem(start, end));
                    }
                    else
                    {
                        result.Add(new TimeToRunItem(end, start));
                    }
                }
                else
                {
                    throw new Exception("Invail format, START and END timespan values should not null");
                }
            }

            return result.ToArray();
        }
    }
}
