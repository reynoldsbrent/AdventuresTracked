using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    [Table("Journals")]
    public class Journal
    {
        public int TripId { get; set; }
        public Trip Trip { get; set; }
        public int JournalId { get; set; }
        public string Title { get; set; }
        public string Entry { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }
    }
}
