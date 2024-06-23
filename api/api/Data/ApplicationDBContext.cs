using api.Models;
using Microsoft.EntityFrameworkCore;
namespace api.Data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {
            
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Trip> Trips { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Leg> Legs { get; set; }
        public DbSet<Journal> Journals { get; set; }
        public DbSet<Airport> Airports { get; set; }


    }
}
