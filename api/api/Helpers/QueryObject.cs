namespace api.Helpers
{
    public class QueryObject
    {
        public string? TripName { get; set; } = null;

        public string? SortBy { get; set; } = null;
        public bool IsDescending { get; set; } = false; 
    }
}
