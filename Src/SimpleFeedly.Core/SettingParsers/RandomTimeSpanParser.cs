using AppCfg;
using AppCfg.TypeParsers;
using System;

namespace SimpleFeedly.SettingParsers
{
    public class RandomTimeSpan
    {
        static Random _rand = new Random(Guid.NewGuid().GetHashCode());
        private TimeSpan _start { get; }
        private TimeSpan _end { get; }

        public RandomTimeSpan(TimeSpan start, TimeSpan end)
        {
            _start = start;
            _end = end;
        }

        public TimeSpan GenerateRamdomValue()
        {
            var min = _start.TotalMinutes;
            var max = _end.TotalMinutes;

            var ranMinutes = _rand.NextDouble() * (max - min) + min;

            return TimeSpan.FromMinutes(ranMinutes);
        }
    }

    public class RandomTimeSpanParser : ITypeParser<RandomTimeSpan> // INT is numberTaskToRun
    {
        // FORMAT: 20:30:01,23:59:02
        public RandomTimeSpan Parse(string rawValue, ITypeParserOptions options)
        {
            var tsRange = rawValue.Split(',');

            TimeSpan start;
            TimeSpan end;

            if (options.InputFormat == null)
            {
                start = TimeSpan.Parse(tsRange[0], TypeParserSettings.DefaultCulture);
                end = TimeSpan.Parse(tsRange[1], TypeParserSettings.DefaultCulture);
            }
            else
            {
                start = TimeSpan.ParseExact(tsRange[0], options.InputFormat, TypeParserSettings.DefaultCulture);
                end = TimeSpan.ParseExact(tsRange[1], options.InputFormat, TypeParserSettings.DefaultCulture);
            }

            if (start != null && end != null)
            {
                if (start <= end)
                {
                    return new RandomTimeSpan(start, end);
                }
                else
                {
                    return new RandomTimeSpan(end, start);
                }
            }
            else
            {
                throw new Exception("Invail format, START and END timespan values should not null");
            }
        }
    }
}
