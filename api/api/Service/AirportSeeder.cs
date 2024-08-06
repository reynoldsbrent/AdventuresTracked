using api.Data;
using api.Models;
using System.Formats.Asn1;
using System.Globalization;
using CsvHelper;
using CsvHelper.Configuration;

namespace api.Service
{
    public class AirportSeeder
    {
        private readonly ApplicationDBContext _context;
        private readonly IWebHostEnvironment _environment;
        private readonly ILogger<AirportSeeder> _logger;

        public AirportSeeder(ApplicationDBContext context, IWebHostEnvironment environment, ILogger<AirportSeeder> logger)
        {
            _context = context;
            _environment = environment;
            _logger = logger;
        }

        public async Task SeedAirportsAsync()
        {
            try
            {
                if (!_context.Airports.Any())
                {
                    var csvPath = Path.Combine(_environment.ContentRootPath, "Data", "airports.csv");
                    _logger.LogInformation($"Attempting to read CSV file from: {csvPath}");

                    if (!File.Exists(csvPath))
                    {
                        _logger.LogError($"CSV file not found at path: {csvPath}");
                        return;
                    }

                    using var reader = new StreamReader(csvPath);
                    var config = new CsvConfiguration(CultureInfo.InvariantCulture)
                    {
                        HasHeaderRecord = false,
                        MissingFieldFound = null
                    };
                    using var csv = new CsvReader(reader, config);

                    var airports = csv.GetRecords<Airport>().ToList();
                    _logger.LogInformation($"Read {airports.Count} airports from CSV");

                    await _context.Airports.AddRangeAsync(airports);
                    await _context.SaveChangesAsync();

                    _logger.LogInformation("Airports seeded successfully");
                }
                else
                {
                    _logger.LogInformation("Airports table is not empty. Skipping seeding.");
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while seeding the airports");
            }
        }
    }
}
