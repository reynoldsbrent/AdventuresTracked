using api.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Interfaces
{
    public interface IAirportRepository
    {
        Task<Airport?> GetByCodeAsync(string ICAO);
    }
}
