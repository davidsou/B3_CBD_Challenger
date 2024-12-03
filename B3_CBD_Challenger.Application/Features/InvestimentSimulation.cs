using B3_CBD_Challenger.Application.Model;
using MediatR;

namespace B3_CBD_Challenger.Application.Features;

public class InvestimentSimulation
{
    public record InvestSimulationCommand(decimal Value, int MonthPeriod) : IRequest<InvestmentSimulationResponse>;

    public class CommandHandle() : IRequestHandler<InvestSimulationCommand, InvestmentSimulationResponse>
    {
        private const decimal CDI = 0.009m; // 0,9% mensal
        private const decimal TB = 1.08m;   // 108% do CDI
        public async Task<InvestmentSimulationResponse> Handle(InvestSimulationCommand request, CancellationToken cancellationToken)
        {
            var grossInvestment = CalculateFinalValue(request.Value, request.MonthPeriod);
            var (netInvestment, taxApplied) = ApplyTax(grossInvestment, request.Value, request.MonthPeriod);

            var result = new InvestmentSimulationResponse(request.Value,request.MonthPeriod,grossInvestment,netInvestment, taxApplied);
            
            return await Task.FromResult( result);
        }

        private decimal CalculateFinalValue(decimal initialValue, int months)
        {
            decimal finalValue = initialValue;

            for (int i = 0; i < months; i++)
            {
                finalValue *= 1 + (CDI * TB);
            }

            return Math.Round(finalValue,2);
        }

        public (decimal netValue, decimal appliedTax) ApplyTax(decimal finalValue, decimal initialValue, int months)
        {
            decimal profit = finalValue - initialValue;
            decimal taxRate = GetTaxRate(months);
            decimal tax = profit * taxRate;
            var netValue = (finalValue - tax);
            return (Math.Round(netValue), taxRate);
        }

        private decimal GetTaxRate(int months)
        {
            return months switch
            {
                <= 6 => 0.225m,   // 22,5%
                <= 12 => 0.20m,   // 20%
                <= 24 => 0.175m,  // 17,5%
                _ => 0.15m        // 15%
            };
        }
    }
}
