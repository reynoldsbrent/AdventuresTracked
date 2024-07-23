using api.Data;
using api.Dtos.Journal;
using api.Dtos.Trip;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class PortfolioRepository : IPortfolioRepository
    {
        private readonly ApplicationDBContext _context;
        public PortfolioRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<Portfolio> CreateAsync(Portfolio portfolio)
        {
            await _context.Portfolios.AddAsync(portfolio);
            await _context.SaveChangesAsync();
            return portfolio;
        }

        public async Task<Portfolio> DeletePortfolio(AppUser appUser, int tripId)
        {
            var portfolioModel = await _context.Portfolios.FirstOrDefaultAsync(x => x.AppUserId == appUser.Id && x.Trip.TripId == tripId);

            if(portfolioModel == null)
            {
                return null;
            }

            _context.Portfolios.Remove(portfolioModel);
            await _context.SaveChangesAsync();
            return portfolioModel;
        }

        public async Task<List<Trip>> GetUserPortfolio(AppUser user)
        {

            return await _context.Portfolios.Where(u => u.AppUserId == user.Id).Select(trip => new Trip
            {
                TripId = trip.TripId,
                TripName = trip.Trip.TripName,
                StartDate = trip.Trip.StartDate,
                EndDate = trip.Trip.EndDate,
                CreatedAt = trip.Trip.CreatedAt,
                Journals = trip.Trip.Journals,
                Legs = trip.Trip.Legs,
                Photos = trip.Trip.Photos
            }).ToListAsync();
        }
    }
}
