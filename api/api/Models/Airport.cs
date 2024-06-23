using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class Airport
    {
        [Required]
        public int AirportId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Country { get; set; }
        [Required]
        public string IATA { get; set; }
        [Required]
        public string ICAO { get; set; }
        [Required]
        public double Latitude { get; set; }
        [Required]
        public double Longitude { get; set; }
        [Required]
        public int Altitude { get; set; }
        [Required]
        public double TimeZone { get; set; }
        [Required]
        public string DST { get; set; } // Day Light Savings info
        [Required]
        public string TzDatabaseTimeZone { get; set; }
        [Required]
        public string Type { get; set; } // Type of airport
        [Required]
        public string Source { get; set; } // Source of this data
    }
}
