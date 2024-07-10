using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AirportController : ControllerBase
    {
        private readonly IAirportRepository _airportRepo;
        public AirportController(IAirportRepository airportRepo)
        {
            _airportRepo = airportRepo;
        }
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetByCode(string ICAO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var airport = await _airportRepo.GetByCodeAsync(ICAO);

            if (airport == null)
            {
                return NotFound();
            }

            return Ok(airport.ToAirportDto());
        }
    }
}
