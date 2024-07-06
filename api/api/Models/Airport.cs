using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    [Table("Airports")]
    public class Airport
    {
        public int AirportId { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string IATA { get; set; }
        public string ICAO { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public int Altitude { get; set; }
        public double TimeZone { get; set; }
        public string DST { get; set; } // Day Light Savings info
        public string TzDatabaseTimeZone { get; set; }
        public string Type { get; set; } // Type of airport
        public string Source { get; set; } // Source of this data
    }
}
