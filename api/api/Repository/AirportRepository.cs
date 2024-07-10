using api.Data;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class AirportRepository : IAirportRepository
    {
        private readonly ApplicationDBContext _context;
        public AirportRepository(ApplicationDBContext context)
        {
            _context = context;
        }
        public async Task<Airport?> GetByCodeAsync(string ICAO)
        {
            return await _context.Airports.FirstOrDefaultAsync(a => a.ICAO == ICAO);
        }
    }
}
