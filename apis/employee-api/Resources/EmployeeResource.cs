using employees.Database;
using employees.Models;
using Microsoft.EntityFrameworkCore;

namespace employees.Resources;

public class EmployeeResource : IEmployeeResource
{
    private readonly EmployeesContext _db;

    public EmployeeResource(EmployeesContext db) {
        _db = db;
    }
    
    public async Task<List<Employee>> GetEmployeesAsync() {
        return await _db.Employees.FromSqlRaw("SELECT * FROM employees").ToListAsync();
    }
}
