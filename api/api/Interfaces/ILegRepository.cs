using api.Dtos.Leg;
using api.Models;

namespace api.Interfaces
{
    public interface ILegRepository
    {
        Task<Leg?> GetLegByIdAsync(int id);
        Task<Leg> CreateAsync(Leg legModel);
        Task<Leg?> UpdateAsync(int id, UpdateLegRequestDto legDto);
        Task<Leg?> DeleteAsync(int id);
        Task<bool> LegExists(int id);
    }
}
