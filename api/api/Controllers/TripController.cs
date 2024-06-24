using api.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.Mappers;

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
    }
}
