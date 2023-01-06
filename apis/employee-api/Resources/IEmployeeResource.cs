namespace employees.Resources;

using employees.Models;

public interface IEmployeeResource {
  Task<List<Employee>> GetEmployeesAsync();
}