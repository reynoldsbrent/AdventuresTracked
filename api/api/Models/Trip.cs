using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    public class Trip
    {
        [Required]
        public int UserId { get; set; }
        [Required]
        public User User { get; set; }
        [Required]
        public int TripId { get; set; }
        [Required]
        public string TripName { get; set; }
        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public DateTime EndDate { get; set; }
        [Required]
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public List<Leg> Legs { get; set; } = new List<Leg>();
        public List<Journal> Journals { get; set; } = new List<Journal>();
        public List<Photo> Photos { get; set; } = new List<Photo>();
    }
}
