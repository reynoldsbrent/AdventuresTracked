using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    [Table("Portfolios")]
    public class Portfolio
    {
        public string AppUserId { get; set; }
        public int TripId { get; set; }
        public AppUser AppUser { get; set; }
        public Trip Trip { get; set; }
    }
}
