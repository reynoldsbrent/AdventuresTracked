using api.Models;

namespace api.Interfaces
{
    public interface IPortfolioRepository
    {
        Task<List<Trip>> GetUserPortfolio(AppUser user);
        Task<Portfolio> CreateAsync(Portfolio portfolio);
    }
}
