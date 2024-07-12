using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace api.Dtos.Leg
{
    public class UpdateLegRequestDto
    {
        [Required]
        [MinLength(4, ErrorMessage = "The Departure Airport ICAO must be 4 characters")]
        [MaxLength(4, ErrorMessage = "The Departure Airport ICAO must be 4 characters")]
        public string DepartureAirportId { get; set; }
        [Required]
        [MinLength(4, ErrorMessage = "The Arrival Airport ICAO must be 4 characters")]
        [MaxLength(4, ErrorMessage = "The Arrival Airport ICAO must be 4 characters")]
        public string ArrivalAirportId { get; set; }
        [Required]
        public DateTime DepartureDate { get; set; }
        [Required]
        public DateTime ArrivalDate { get; set; }
    }
}
