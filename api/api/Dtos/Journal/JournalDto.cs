using System.ComponentModel.DataAnnotations;

namespace api.Dtos.Journal
{
    public class JournalDto
    {
        public int TripId { get; set; }
        public int JournalId { get; set; }
        public string Title { get; set; }
        public string Entry { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public string CreatedBy { get; set; } = string.Empty;
    }
}
