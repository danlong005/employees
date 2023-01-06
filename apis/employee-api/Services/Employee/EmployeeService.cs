using employees.Models;
using employees.Database;
using employees.Resources;

namespace employees.Services;

public class EmployeeService : IEmployeeService
{
  private readonly IEmployeeResource _resource;

  public EmployeeService(IEmployeeResource resource) {
    _resource = resource;
  }

  public async Task<List<Employee>> GetEmployeesAsync()
  {
    return await _resource.GetEmployeesAsync();
  }
}