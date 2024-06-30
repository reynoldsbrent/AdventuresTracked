using api.Data;
using api.Dtos.Trip;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class TripRepository : ITripRepository
    {
        private readonly ApplicationDBContext _context;

        public TripRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<Trip> CreateAsync(Trip tripModel)
        {
            await _context.Trips.AddAsync(tripModel);
            await _context.SaveChangesAsync();
            return tripModel;
        }

        public async Task<Trip?> DeleteAsync(int id)
        {
            var tripModel = await _context.Trips.FirstOrDefaultAsync(x => x.TripId == id);
            
            if(tripModel == null)
            {
                return null;
            }

            _context.Trips.Remove(tripModel);
            await _context.SaveChangesAsync();
            return tripModel;
        }

        public async Task<List<Trip>> GetAllAsync()
        {
            return await _context.Trips.Include(c => c.Journals).ToListAsync();
        }

        public async Task<Trip?> GetByIdAsync(int id)
        {
            return await _context.Trips.Include(c => c.Journals).FirstOrDefaultAsync(i => i.TripId == id);
        }

        public async Task<Trip?> UpdateAsync(int id, UpdateTripRequestDto tripDto)
        {
            var existingTrip = await _context.Trips.FirstOrDefaultAsync(x => x.TripId == id);

            if(existingTrip == null)
            {
                return null;
            }

            existingTrip.UserId = tripDto.UserId;
            existingTrip.TripName = tripDto.TripName;
            existingTrip.StartDate = tripDto.StartDate;
            existingTrip.EndDate = tripDto.EndDate;

            await _context.SaveChangesAsync();

            return existingTrip;
        }
    }
}
