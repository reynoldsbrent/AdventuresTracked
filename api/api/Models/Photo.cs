using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class Photo
    {
        public int TripId { get; set; }
        public Trip Trip { get; set; }
        public int PhotoId { get; set; }
        public string PhotoUrl { get; set; }
        public string? Description { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
