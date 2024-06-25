using api.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.Mappers;
using api.Dtos.Trip;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TripController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        public TripController(ApplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var trips = _context.Trips.ToList().Select(s => s.ToTripDto());

            return Ok(trips);
        }

        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            var trip = _context.Trips.Find(id);

            if(trip == null)
            {
                return NotFound();
            }

            return Ok(trip.ToTripDto());
        }

        [HttpPost]
        public IActionResult Create([FromBody] CreateTripRequestDto tripDto)
        {
            var tripModel = tripDto.ToTripFromCreateDto();
            _context.Trips.Add(tripModel);
            try
            {
                _context.SaveChanges();
            }catch
            {
                return StatusCode(500, "An error occured while createing the trip");
            }
            
            return CreatedAtAction(nameof(GetById), new { id = tripModel.TripId }, tripModel.ToTripDto());
        }
    }
}
