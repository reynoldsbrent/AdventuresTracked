using api.Models;
using System.ComponentModel.DataAnnotations;

namespace api.Dtos.Trip
{
    public class TripDto
    {
        public int TripId { get; set; }
        
        public string TripName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        
    }
}
