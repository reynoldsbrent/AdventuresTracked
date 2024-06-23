using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class User
    {
        [Required]
        public int UserId { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string PasswordHash { get; set; }
        [Required]
        public DateTime CreatedAt { get; set; }
        public List<Trip> Trips { get; set; } = new List<Trip>();
    }
}
