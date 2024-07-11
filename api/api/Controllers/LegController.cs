using api.Data;
using api.Dtos.Leg;
using api.Interfaces;
using api.Mappers;
using api.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LegController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private readonly ILegRepository _legRepo;
        private readonly ITripRepository _tripRepo;
        private readonly IAirportRepository _airportRepo;
        public LegController(ApplicationDBContext context, ILegRepository legRepo, ITripRepository tripRepo, IAirportRepository airportRepo)
        {
            _context = context;
            _legRepo = legRepo;
            _tripRepo = tripRepo;
            _airportRepo = airportRepo;
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var leg = await _legRepo.GetLegByIdAsync(id);

            if (leg == null)
            {
                return NotFound();
            }

            return Ok(leg.ToLegDto());
        }

        [HttpPost("{tripId:int}")]
        [Authorize]
        public async Task<IActionResult> Create([FromRoute] int tripId, CreateLegRequestDto legDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var trip = await _tripRepo.GetByIdAsync(tripId);

            if(trip == null)
            {
                return BadRequest("Trip does not exist");
            }

            var legModel = legDto.ToLegFromCreate(trip.TripId);
            var departureAirport = await _airportRepo.GetByCodeAsync(legModel.DepartureAirportId);
            var arrivalAirport = await _airportRepo.GetByCodeAsync(legModel.ArrivalAirportId);

            var departureAirportLatitude = departureAirport.Latitude;
            var departureAirportLongitude = departureAirport.Longitude;

            var arrivalAirportLatitude = arrivalAirport.Latitude;
            var arrivalAirportLongitude = arrivalAirport.Longitude;

            legModel.DistanceMiles = CalculateDistanceService.CalculateDistance(departureAirportLatitude, departureAirportLongitude, arrivalAirportLatitude, arrivalAirportLongitude);

            await _legRepo.CreateAsync(legModel);

            return CreatedAtAction(nameof(GetById), new { id = legModel.LegId }, legModel.ToLegDto());
        }
    }
}
