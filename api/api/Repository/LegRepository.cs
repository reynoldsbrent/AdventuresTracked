using api.Data;
using api.Dtos.Leg;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class LegRepository : ILegRepository
    {
        private readonly ApplicationDBContext _context;
        public LegRepository(ApplicationDBContext context)
        {
            _context = context;
        }
        public async Task<Leg> CreateAsync(Leg legModel)
        {
            await _context.Legs.AddAsync(legModel);
            await _context.SaveChangesAsync();
            return legModel;
        }

        public Task<Leg?> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<double> DistanceMiles(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<Leg?> GetLegByIdAsync(int id)
        {
            return await _context.Legs.FirstOrDefaultAsync(l => l.LegId == id);
        }

        public Task<bool> LegExists(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Leg?> UpdateAsync(int id, UpdateLegRequestDto legDto)
        {
            throw new NotImplementedException();
        }
    }
}
