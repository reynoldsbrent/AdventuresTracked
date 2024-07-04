using api.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
namespace api.Data
{
    public class ApplicationDBContext : IdentityDbContext<AppUser>
    {
        public ApplicationDBContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {
            
        }

        public DbSet<Trip> Trips { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Leg> Legs { get; set; }
        public DbSet<Journal> Journals { get; set; }
        public DbSet<Airport> Airports { get; set; }


    }
}
