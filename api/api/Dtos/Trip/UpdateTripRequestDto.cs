using System.ComponentModel.DataAnnotations;

namespace api.Dtos.Trip
{
    public class UpdateTripRequestDto
    {
        [Required]
        public int UserId { get; set; }
        [Required]
        [MaxLength(300, ErrorMessage = "Trip Name cannot be over 300 characters long.")]
        public string TripName { get; set; }
        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public DateTime EndDate { get; set; }
    }
}
