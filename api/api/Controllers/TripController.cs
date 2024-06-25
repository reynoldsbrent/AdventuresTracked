using api.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.Mappers;
using api.Dtos.Trip;
using Microsoft.EntityFrameworkCore;

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
        public async Task<IActionResult> GetAll()
        {
            var trips = await _context.Trips.ToListAsync();

            var tripDto = trips.Select(s => s.ToTripDto());

            return Ok(tripDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var trip = await _context.Trips.FindAsync(id);

            if(trip == null)
            {
                return NotFound();
            }

            return Ok(trip.ToTripDto());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateTripRequestDto tripDto)
        {
            var tripModel = tripDto.ToTripFromCreateDto();
            await _context.Trips.AddAsync(tripModel);
            try
            {
               await _context.SaveChangesAsync();
            }catch
            {
                return StatusCode(500, "An error occured while createing the trip");
            }
            
            return CreatedAtAction(nameof(GetById), new { id = tripModel.TripId }, tripModel.ToTripDto());
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateTripRequestDto updateDto)
        {
            var tripModel = await _context.Trips.FirstOrDefaultAsync(x => x.TripId == id);

            if(tripModel == null)
            {
                return NotFound();
            }

            tripModel.UserId = updateDto.UserId;
            tripModel.TripName = updateDto.TripName;
            tripModel.StartDate = updateDto.StartDate;
            tripModel.EndDate = updateDto.EndDate;

            await _context.SaveChangesAsync();

            return Ok(tripModel.ToTripDto());
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var tripModel = await _context.Trips.FirstOrDefaultAsync(x => x.TripId == id);

            if(tripModel == null)
            {
                return NotFound();
            }

            _context.Trips.Remove(tripModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
