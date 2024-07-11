using api.Dtos.Leg;
using api.Models;

namespace api.Mappers
{
    public static class LegMappers
    {
        public static LegDto ToLegDto(this Leg legModel)
        {
            return new LegDto
            {
                LegId = legModel.LegId,
                TripId = legModel.TripId,
                DepartureAirportId = legModel.DepartureAirportId,
                ArrivalAirportId = legModel.ArrivalAirportId,
                DepartureDate = legModel.DepartureDate,
                ArrivalDate = legModel.ArrivalDate,
                DistanceMiles = legModel.DistanceMiles,
                CreatedAt = legModel.CreatedAt
            };
        }

        public static Leg ToLegFromCreate(this CreateLegRequestDto legDto, int tripId)
        {
            return new Leg
            {
                DepartureAirportId = legDto.DepartureAirportId,
                ArrivalAirportId = legDto.ArrivalAirportId,
                DepartureDate = legDto.DepartureDate,
                ArrivalDate = legDto.ArrivalDate,
                TripId = tripId
            };
        }
    }
}
