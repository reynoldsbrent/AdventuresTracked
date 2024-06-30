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

        public async Task<Journal> CreateAsync(Journal journalModel)
        {
            await _context.Journals.AddAsync(journalModel);
            await _context.SaveChangesAsync();
            return journalModel;
        }

        public async Task<Journal?> DeleteAsync(int id)
        {
            var journalModel = await _context.Journals.FirstOrDefaultAsync(x => x.JournalId == id);

            if(journalModel == null)
            {
                return null;
            }

            _context.Journals.Remove(journalModel);
            await _context.SaveChangesAsync();
            return journalModel;
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
