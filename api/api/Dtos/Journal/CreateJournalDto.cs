using System.ComponentModel.DataAnnotations;

namespace api.Dtos.Journal
{
    public class CreateJournalDto
    {
        [Required]
        [MinLength(5, ErrorMessage = "Title must be at least 5 characters")]
        [MaxLength(300, ErrorMessage = "Title cannot be over 300 characters")]
        public string Title { get; set; }
        [Required]
        [MinLength(5, ErrorMessage = "Journal must be at least 5 characters")]
        [MaxLength(1500, ErrorMessage = "Journal cannot be over 1,500 characters")]
        public string Entry { get; set; }
    }
}
