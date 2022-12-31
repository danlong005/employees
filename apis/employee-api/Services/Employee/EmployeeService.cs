using employees.Models;

namespace employees.Services;

public class EmployeeService : IEmployeeService
{
  public async Task<List<Employee>> GetEmployees()
  {
    await Task.Delay(000);

    List<Employee> employees = new List<Employee>();
    employees.Add(new Employee () { Id = 1, FirstName = "Daniel", LastName = "Long", HiredAt = DateTime.Now, Salary = 75000.00 });
    employees.Add(new Employee () { Id = 2, FirstName = "Blair", LastName = "Long", HiredAt = DateTime.Now, Salary = 55000.00 });
    employees.Add(new Employee () { Id = 3, FirstName = "Tony", LastName = "Breeding", HiredAt = DateTime.Now, Salary = 80000.00 });
    employees.Add(new Employee () { Id = 4, FirstName = "Lorie", LastName = "Breeding", HiredAt = DateTime.Now, Salary = 45000.00 });
    employees.Add(new Employee () { Id = 5, FirstName = "Frank", LastName = "Bleeker", HiredAt = DateTime.Now, Salary = 65000.00 });

    return employees;
  }
}