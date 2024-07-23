using api.Data;
using api.Helpers;
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

        public async Task<List<Journal>> GetAllAsync(JournalQueryObject queryObject)
        {
            var journals = _context.Journals.Include(a => a.AppUser).AsQueryable();

            if (queryObject.TripId.HasValue)
            {
                journals = journals.Where(l => l.TripId == queryObject.TripId);
            }

            if (queryObject.IsDescending == true)
            {
                journals = journals.OrderByDescending(j => j.CreatedAt);
            }

            return await journals.ToListAsync();
        }

        public async Task<Journal?> GetByIdAsync(int id)
        {
            return await _context.Journals.Include(a => a.AppUser).FirstOrDefaultAsync(j => j.JournalId == id);
        }

        public async Task<Journal?> UpdateAsync(int id, Journal journalModel)
        {
            var existingJournal = await _context.Journals.FindAsync(id);

            if(existingJournal  == null)
            {
                return null;
            }

            existingJournal.Title = journalModel.Title;
            existingJournal.Entry = journalModel.Entry;

            await _context.SaveChangesAsync();

            return existingJournal;
        }
    }
}
