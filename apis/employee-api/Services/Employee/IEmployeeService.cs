using employees.Models;

namespace employees.Services;

public interface IEmployeeService 
{
  Task<List<Employee>> GetEmployeesAsync();
}