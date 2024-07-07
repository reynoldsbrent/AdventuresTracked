using api.Data;
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

        public async Task<List<Trip>> GetUserPortfolio(AppUser user)
        {
            return await _context.Portfolios.Where(u => u.AppUserId == user.Id).Select(trip => new Trip
            {
                TripId = trip.TripId,
                TripName = trip.Trip.TripName,
                StartDate = trip.Trip.StartDate,
                EndDate = trip.Trip.EndDate,
                CreatedAt = trip.Trip.CreatedAt
            }).ToListAsync();
        }
    }
}
