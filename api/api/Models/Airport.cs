using CsvHelper.Configuration.Attributes;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    [Table("Airports")]
    public class Airport
    {
        [Index(0)]
        public int AirportId { get; set; }
        [Index(1)]
        public string? Name { get; set; }
        [Index(2)]
        public string? City { get; set; }
        [Index(3)]
        public string? Country { get; set; }
        [Index(4)]
        public string? IATA { get; set; }
        [Index(5)]
        public string? ICAO { get; set; }
        [Index(6)]
        public double? Latitude { get; set; }
        [Index(7)]
        public double? Longitude { get; set; }
        [Index(8)]
        public int? Altitude { get; set; }
        [Index(9)]
        public double? TimeZone { get; set; }
        [Index(10)]
        public string? DST { get; set; } // Day Light Savings info
        [Index(11)]
        public string? TzDatabaseTimeZone { get; set; }
        [Index(12)]
        public string? Type { get; set; } // Type of airport
        [Index(13)]
        public string? Source { get; set; } // Source of this data
    }
}
