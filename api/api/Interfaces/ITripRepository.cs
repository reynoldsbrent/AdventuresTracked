using api.Dtos.Trip;
using api.Helpers;
using api.Models;

namespace api.Interfaces
{
    public interface ITripRepository
    {
        Task<List<Trip>> GetAllAsync(QueryObject query);
        Task<Trip?> GetByIdAsync(int id);
        Task<Trip> CreateAsync(Trip tripModel);
        Task<Trip?> UpdateAsync(int id, UpdateTripRequestDto tripDto);
        Task<Trip?> DeleteAsync(int id);
        Task<bool> TripExists(int id);
    }
}
