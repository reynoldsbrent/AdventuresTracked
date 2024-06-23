using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class Journal
    {
        [Required]
        public int TripId { get; set; }
        [Required]
        public Trip Trip { get; set; }
        [Required]
        public int JournalId { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Entry { get; set; }
        [Required]
        public DateTime CreatedAt { get; set; }
    }
}
