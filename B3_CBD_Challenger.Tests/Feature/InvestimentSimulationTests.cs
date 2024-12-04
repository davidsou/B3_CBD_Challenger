using B3_CBD_Challenger.Application.Features;
using System.Threading;
using System.Threading.Tasks;
using Xunit;

namespace B3_CBD_Challenger.Tests.Feature;

public class InvestimentSimulationTests
{
    [Theory]
    [InlineData(1000, 6, 1059.76, 1046, 0.225)]  // Exemplo de 6 meses com 22,5% de imposto
    [InlineData(1000, 12, 1123.08, 1098, 0.20)]  // Exemplo de 12 meses com 20% de imposto
    [InlineData(1000, 18, 1190.19, 1157, 0.175)] // Exemplo de 18 meses com 17,5% de imposto
    [InlineData(1000, 30, 1336.68, 1286, 0.15)]  // Exemplo de 30 meses com 15% de imposto
    public async Task Handle_ShouldReturnCorrectSimulation(decimal initialValue, int months, decimal expectedGross, decimal expectedNet, decimal expectedTaxRate)
    {
        // Arrange
        var command = new InvestimentSimulation.InvestSimulationCommand(initialValue, months);
        var handler = new InvestimentSimulation.CommandHandle();
        var cancellationToken = CancellationToken.None;

        // Act
        var result = await handler.Handle(command, cancellationToken);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(initialValue, result.InitialValue);
        Assert.Equal(months, result.Months);
        Assert.Equal(expectedGross, result.GrossInvestment);
        Assert.Equal(expectedNet, result.NetInvestment);
        Assert.Equal(expectedTaxRate, result.TaxApplied);
    }
}
