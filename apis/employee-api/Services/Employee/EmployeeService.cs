using employees.Models;

namespace employees.Services;

public class EmployeeService : IEmployeeService
{
  public async Task<List<Employee>> GetEmployees()
  {
    await Task.Delay(000);

    List<Employee> employees = new List<Employee>();
    employees.Add(new Employee () { Id = 1 });
    employees.Add(new Employee () { Id = 2 });
    employees.Add(new Employee () { Id = 3 });
    employees.Add(new Employee () { Id = 4 });
    employees.Add(new Employee () { Id = 5 });

    return employees;
  }
}