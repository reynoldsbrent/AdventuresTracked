using api.Helpers;
using api.Models;

namespace api.Interfaces
{
    public interface IJournalRepository
    {
        Task<List<Journal>> GetAllAsync(JournalQueryObject queryObject);
        Task<Journal?> GetByIdAsync(int id);
        Task<Journal> CreateAsync(Journal journalModel);
        Task<Journal?> UpdateAsync(int id, Journal journalModel);
        Task<Journal?> DeleteAsync(int id);
    }
}
