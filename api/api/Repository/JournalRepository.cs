using api.Data;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class JournalRepository : IJournalRepository
    {
        private readonly ApplicationDBContext _context;
        public JournalRepository(ApplicationDBContext context)
        {
            _context = context;
        }
        public async Task<List<Journal>> GetAllAsync()
        {
            return await _context.Journals.ToListAsync();
        }

        public async Task<Journal?> GetByIdAsync(int id)
        {
            return await _context.Journals.FindAsync(id);
        }
    }
}
