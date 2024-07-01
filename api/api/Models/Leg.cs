using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class Leg
    {
        public int LegId { get; set; }
        public int TripId { get; set; }
        public Trip Trip { get; set; }
        public string DepartureAirportId { get; set; }
        public string ArrivalAirportId { get; set; }
        public DateTime DepartureDate { get; set; }
        public DateTime ArrivalDate { get; set;}
        public double DistanceMiles { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
