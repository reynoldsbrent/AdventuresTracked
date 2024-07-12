using api.Data;
using api.Dtos.Leg;
using api.Helpers;
using api.Interfaces;
using api.Models;
using api.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class LegRepository : ILegRepository
    {
        private readonly ApplicationDBContext _context;
        private readonly IAirportRepository _airportRepo;
        public LegRepository(ApplicationDBContext context, IAirportRepository airportRepo)
        {
            _context = context;
            _airportRepo = airportRepo;
        }
        public async Task<Leg> CreateAsync(Leg legModel)
        {
            await _context.Legs.AddAsync(legModel);
            await _context.SaveChangesAsync();
            return legModel;
        }

        public async Task<Leg?> DeleteAsync(int id)
        {
            var legModel = await _context.Legs.FirstOrDefaultAsync(x => x.LegId == id);

            if (legModel == null)
            {
                return null;
            }

            _context.Legs.Remove(legModel);
            await _context.SaveChangesAsync();
            return legModel;
        }

        public async Task<List<Leg>> GetAllAsync(LegQueryObject queryObject)
        {
            var legs = _context.Legs.AsQueryable();

            if (queryObject.TripId.HasValue)
            {
                legs = legs.Where(l => l.TripId == queryObject.TripId);
            }

            if (queryObject.IsDescending == true)
            {
                legs = legs.OrderByDescending(l => l.DepartureDate);
            }
            return await legs.ToListAsync();
        }

        public async Task<Leg?> GetLegByIdAsync(int id)
        {
            return await _context.Legs.FirstOrDefaultAsync(l => l.LegId == id);
        }

        public Task<bool> LegExists(int id)
        {
            return _context.Legs.AnyAsync(l => l.LegId == id);
        }

   
        public async Task<Leg?> UpdateAsync(int id, UpdateLegRequestDto legDto)
        {
            var existingLeg = await _context.Legs.FirstOrDefaultAsync(x => x.LegId == id);

            if (existingLeg == null)
            {
                return null;
            }

            existingLeg.DepartureAirportId = legDto.DepartureAirportId;
            existingLeg.ArrivalAirportId = legDto.ArrivalAirportId;
            existingLeg.DepartureDate = legDto.DepartureDate;
            existingLeg.ArrivalDate = legDto.ArrivalDate;

            var departureAirport = await _airportRepo.GetByCodeAsync(legDto.DepartureAirportId);
            var arrivalAirport = await _airportRepo.GetByCodeAsync(legDto.ArrivalAirportId);

            var departureAirportLatitude = departureAirport.Latitude;
            var departureAirportLongitude = departureAirport.Longitude;

            var arrivalAirportLatitude = arrivalAirport.Latitude;
            var arrivalAirportLongitude = arrivalAirport.Longitude;

            existingLeg.DistanceMiles = CalculateDistanceService.CalculateDistance(departureAirportLatitude, departureAirportLongitude, arrivalAirportLatitude, arrivalAirportLongitude);

            await _context.SaveChangesAsync();

            return existingLeg;
        }
    }
}
