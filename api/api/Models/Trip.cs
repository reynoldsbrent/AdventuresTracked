using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    public class Trip
    {
        public int TripId { get; set; }
        public string TripName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public List<Leg> Legs { get; set; } = new List<Leg>();
        public List<Journal> Journals { get; set; } = new List<Journal>();
        public List<Photo> Photos { get; set; } = new List<Photo>();
    }
}
