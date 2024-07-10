using api.Dtos.Airport;
using api.Models;

namespace api.Mappers
{
    public static class AirportMappers
    {
        public static AirportDto ToAirportDto(this Airport AirportModel)
        {
            return new AirportDto
            {
                AirportId = AirportModel.AirportId,
                Name = AirportModel.Name,
                City = AirportModel.City,
                Country = AirportModel.Country,
                IATA = AirportModel.IATA,
                ICAO = AirportModel.ICAO,
                Latitude = AirportModel.Latitude,
                Longitude = AirportModel.Longitude
            };
        }
    }
}
