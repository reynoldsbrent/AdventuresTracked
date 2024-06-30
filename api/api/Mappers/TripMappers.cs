using api.Dtos.Trip;
using api.Models;
using System.Runtime.CompilerServices;

namespace api.Mappers
{
    public static class TripMappers
    {
        public static TripDto ToTripDto(this Trip tripModel)
        {
            return new TripDto
            {
                TripName = tripModel.TripName,
                TripId = tripModel.TripId,
                StartDate = tripModel.StartDate,
                EndDate = tripModel.EndDate,
                CreatedAt = tripModel.CreatedAt,
                Journals = tripModel.Journals.Select(j => j.ToJournalDto()).ToList()
            };
        }

        public static Trip ToTripFromCreateDto(this CreateTripRequestDto tripDto)
        {
            return new Trip
            {
                UserId = tripDto.UserId,
                TripName = tripDto.TripName,
                StartDate = tripDto.StartDate,
                EndDate = tripDto.EndDate,
            };
        }
    }
}
