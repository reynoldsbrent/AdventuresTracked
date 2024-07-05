using api.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.Mappers;
using api.Dtos.Trip;
using Microsoft.EntityFrameworkCore;
using api.Interfaces;
using api.Helpers;
using Microsoft.AspNetCore.Authorization;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TripController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private readonly ITripRepository _tripRepo;
        public TripController(ApplicationDBContext context, ITripRepository tripRepo)
        {
            _tripRepo = tripRepo;
            _context = context;
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAll([FromQuery] QueryObject query)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var trips = await _tripRepo.GetAllAsync(query);

            var tripDto = trips.Select(s => s.ToTripDto());

            return Ok(tripDto);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var trip = await _tripRepo.GetByIdAsync(id);

            if(trip == null)
            {
                return NotFound();
            }

            return Ok(trip.ToTripDto());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateTripRequestDto tripDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tripModel = tripDto.ToTripFromCreateDto();

            try
            {
                await _tripRepo.CreateAsync(tripModel);
            }
            catch
            {
                return StatusCode(500, "An error occured while creating the trip");
            }
            
            return CreatedAtAction(nameof(GetById), new { id = tripModel.TripId }, tripModel.ToTripDto());
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateTripRequestDto updateDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tripModel = await _tripRepo.UpdateAsync(id, updateDto);

            if(tripModel == null)
            {
                return NotFound();
            }

            return Ok(tripModel.ToTripDto());
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tripModel = await _tripRepo.DeleteAsync(id);

            if(tripModel == null)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
