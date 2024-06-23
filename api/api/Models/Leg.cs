using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class Leg
    {
        [Required]
        public int LegId { get; set; }
        [Required]
        public int TripId { get; set; }
        [Required]
        public Trip Trip { get; set; }
        [Required]
        public string DepartureAirportId { get; set; }
        [Required]
        public string ArrivalAirportId { get; set; }
        [Required]
        public DateTime DepartureDate { get; set; }
        [Required]
        public DateTime ArrivalDate { get; set;}
        [Required]
        public double DistanceMiles { get; set; }
        [Required]
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
