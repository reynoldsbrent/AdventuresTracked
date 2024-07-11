namespace api.Service
{
    public static class CalculateDistanceService
    {
        public static double CalculateDistance(double? lat1, double? lon1, double? lat2, double? lon2)
        {
            const double R = 6371; // Earth's radius in kilometers
            var latRad1 = DegreesToRadians(lat1);
            var lonRad1 = DegreesToRadians(lon1);
            var latRad2 = DegreesToRadians(lat2);
            var lonRad2 = DegreesToRadians(lon2);

            var latDelta = latRad2 - latRad1;
            var lonDelta = lonRad2 - lonRad1;

            var a = Math.Sin(latDelta / 2) * Math.Sin(latDelta / 2) +
                    Math.Cos(latRad1) * Math.Cos(latRad2) *
                    Math.Sin(lonDelta / 2) * Math.Sin(lonDelta / 2);
            var c = 2 * Math.Atan2(Math.Sqrt(a), Math.Sqrt(1 - a));
            var distance = R * c; // Distance in kilometers

            return distance * 0.621371; // Convert to miles
        }

        // This helper method converts an angle in degrees to radians.
        private static double DegreesToRadians(double? degrees)
        {
            return (double)(degrees * Math.PI / 180.0);
        }
    }
}
