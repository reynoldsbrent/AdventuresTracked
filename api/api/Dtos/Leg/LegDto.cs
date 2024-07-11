namespace api.Dtos.Leg
{
    public class LegDto
    {
        public int LegId { get; set; }
        public int TripId { get; set; }
        public string DepartureAirportId { get; set; }
        public string ArrivalAirportId { get; set; }
        public DateTime DepartureDate { get; set; }
        public DateTime ArrivalDate { get; set; }
        public double DistanceMiles { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
