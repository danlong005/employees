using Microsoft.EntityFrameworkCore;
using employees.Models;

namespace employees.Database;

public class EmployeesContext : DbContext
{
    private readonly IConfiguration _configuration;
    
    public EmployeesContext(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql(_configuration.GetConnectionString("Database"));
    }

    public DbSet<Employee> Employees { get; set;}
}