using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class Journal
    {
        public int TripId { get; set; }
        public Trip Trip { get; set; }
        public int JournalId { get; set; }
        public string Title { get; set; }
        public string Entry { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
