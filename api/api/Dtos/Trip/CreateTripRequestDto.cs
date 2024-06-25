using System.ComponentModel.DataAnnotations;

namespace api.Dtos.Trip
{
    public class CreateTripRequestDto
    {
        public int UserId { get; set; }
        public string TripName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}
