using System.ComponentModel.DataAnnotations.Schema;

namespace employees.Models;

public class Employee
{
  [Column("id")]
  public long Id { get; set; }
  [Column("first_name")]
  public string FirstName { get; set; }
  [Column("last_name")]
  public string LastName { get; set; }
  [Column("hired_at")]
  public DateTime HiredAt { get; set; }
  [Column("salary")]
  public Double Salary { get; set; }
}