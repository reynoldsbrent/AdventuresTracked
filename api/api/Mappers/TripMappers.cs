using api.Dtos.Trip;
using api.Models;

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
                CreatedAt = tripModel.CreatedAt
            };
        }
    }
}
