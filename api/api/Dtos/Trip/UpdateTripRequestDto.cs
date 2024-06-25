namespace api.Dtos.Trip
{
    public class UpdateTripRequestDto
    {
        public int UserId { get; set; }
        public string TripName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}
