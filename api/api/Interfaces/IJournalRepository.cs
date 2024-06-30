using api.Models;

namespace api.Interfaces
{
    public interface IJournalRepository
    {
        Task<List<Journal>> GetAllAsync();
        Task<Journal?> GetByIdAsync(int id);
        Task<Journal> CreateAsync(Journal journalModel);
    }
}
