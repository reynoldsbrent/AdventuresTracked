using api.Extensions;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/portfolio")]
    [ApiController]
    public class PortfolioController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly ITripRepository _tripRepository;
        private readonly IPortfolioRepository _portfolioRepository;
        public PortfolioController(UserManager<AppUser> userManager, ITripRepository tripRepository, IPortfolioRepository portfolioRepository)
        {
            _userManager = userManager;
            _tripRepository = tripRepository;
            _portfolioRepository = portfolioRepository;
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetUserPortfolio()
        {
            var username = User.GetUsername();
            var appUser = await _userManager.FindByNameAsync(username);
            var userPortfolio = await _portfolioRepository.GetUserPortfolio(appUser);

            return Ok(userPortfolio);
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> AddPortfolio(int tripId)
        {
            var username = User.GetUsername();
            var appUser = await _userManager.FindByNameAsync(username);
            var trip = await _tripRepository.GetByIdAsync(tripId);

            if (trip == null)
            {
                return BadRequest("Trip not found");
            }

            var userPortfolio = await _portfolioRepository.GetUserPortfolio(appUser);

            if(userPortfolio.Any(e => e.TripId == tripId))
            {
                return BadRequest("Cannot add same trip to portfolio");
            }

            var portfolioModel = new Portfolio
            {
                TripId = trip.TripId,
                AppUserId = appUser.Id,

            };

            await _portfolioRepository.CreateAsync(portfolioModel);

            if(portfolioModel == null)
            {
                return StatusCode(500, "Could not create");
            }
            else
            {
                return Created();
            }
        }

        [HttpDelete]
        [Authorize]
        public async Task<IActionResult> DeletePortfolio(int tripId)
        {
            var username = User.GetUsername();
            var appUser = await _userManager.FindByNameAsync(username);

            var userPortfolio = await _portfolioRepository.GetUserPortfolio(appUser);

            var filteredTrip = userPortfolio.Where(t => t.TripId == tripId).ToList();

            if(filteredTrip.Count() == 1)
            {
                await _portfolioRepository.DeletePortfolio(appUser, tripId);
            }
            else
            {
                return BadRequest("Trip is not in your portfolio");
            }

            return Ok();
        }
    }
}
