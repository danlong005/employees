using System;

namespace employees.Models;

public class Employee
{
  public long Id { get; set; }
  public string FirstName { get; set; }
  public string LastName { get; set; }
  public DateTime BirthDate { get; set; }
  public DateTime HiredAt { get; set; }
  public Double Salary { get; set; }
}