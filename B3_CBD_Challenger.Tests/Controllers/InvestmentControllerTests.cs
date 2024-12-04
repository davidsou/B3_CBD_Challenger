using B3_CBD_Challenger.Application.Features;
using B3_CBD_Challenger.Application.Model;
using B3_CBD_Challenger.Server.Controllers;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System.Threading;

namespace B3_CBD_Challenger.Tests.Controllers;

public class InvestmentControllerTests
{
    private readonly Mock<IMediator> _mediatorMock;
    private readonly CBDController _controller; // Substitua pelo nome correto da sua controller

    public InvestmentControllerTests()
    {
        _mediatorMock = new Mock<IMediator>();
        _controller = new CBDController(_mediatorMock.Object);
    }

    [Fact]
    public async Task Simulate_ShouldReturnOkResult_WithExpectedData()
    {
        // Arrange
        var request = new InvestimentSimulationRequest(1000m, 12);
        var simulationResult = new InvestmentSimulationResponse(1000m, 12, 1040m, 1030m, 2m);       

        _mediatorMock
            .Setup(m => m.Send(It.IsAny<InvestimentSimulation.InvestSimulationCommand>(),default))
            .ReturnsAsync(simulationResult);

        // Act
        var result = await _controller.Simulate(request);

        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result);
        Assert.Equal(200, okResult.StatusCode);

        var returnedValue = Assert.IsType<InvestmentSimulationResponse>(okResult.Value);
        Assert.Equal(simulationResult.InitialValue, returnedValue.InitialValue);
        Assert.Equal(simulationResult.Months, returnedValue.Months);
        Assert.Equal(simulationResult.GrossInvestment, returnedValue.GrossInvestment);
        Assert.Equal(simulationResult.NetInvestment, returnedValue.NetInvestment);
        Assert.Equal(simulationResult.TaxApplied, returnedValue.TaxApplied);


        _mediatorMock.Verify(m => m.Send(It.IsAny<InvestimentSimulation.InvestSimulationCommand>(), default), Times.Once);
    }
}
