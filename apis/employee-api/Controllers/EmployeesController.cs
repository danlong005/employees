using Microsoft.AspNetCore.Mvc;
using employees.Services;

namespace employees.Controllers;

[ApiController]
[Route("/api/v1/employees")]
public class EmployeesController : ControllerBase 
{
  private readonly IEmployeeService _employeeService;

  public EmployeesController(IEmployeeService employeeService)
  {
    _employeeService = employeeService;
  }

  [HttpGet]
  public async Task<IActionResult> GetEmployees() 
  {
    return StatusCode(StatusCodes.Status200OK, await _employeeService.GetEmployees());
  }
}