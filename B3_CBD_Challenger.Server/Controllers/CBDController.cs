using B3_CBD_Challenger.Application.Features;
using B3_CBD_Challenger.Application.Model;
using MediatR;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace B3_CBD_Challenger.Server.Controllers;
[DisableCors()]
[Route("[controller]")]
[ApiController]
public class CBDController(IMediator mediator) : ControllerBase
{

    [HttpPost]
    public async Task<IActionResult> Simulate([FromBody] InvestimentSimulationRequest request)
    {
       var result = await mediator.Send(new InvestimentSimulation.InvestSimulationCommand(request.InitialValue, request.Months));

        return Ok(result);
    }
}
