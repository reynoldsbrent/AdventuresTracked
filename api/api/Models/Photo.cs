using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class Photo
    {
        [Required]
        public int TripId { get; set; }
        [Required]
        public Trip Trip { get; set; }
        [Required]
        public int PhotoId { get; set; }
        [Required]
        public string PhotoUrl { get; set; }
        public string? Description { get; set; }
        [Required]
        public DateTime CreatedAt { get; set; }
    }
}
