using Microsoft.AspNetCore.Mvc;

namespace pto_api.Controllers;

[ApiController]
[Route("/api/v1/pto")]
public class PtoController : ControllerBase 
{

  [HttpGet]
  public IActionResult GetPto() {
    return StatusCode(StatusCodes.Status200OK, "{\"message\": \"Hello World\"}");
  }
}