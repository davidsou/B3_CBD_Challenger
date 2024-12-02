using B3_CBD_Challenger.Application.Model;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace B3_CBD_Challenger.Application.Validators
{
    public class InvestmentSimulationRequestValidator:AbstractValidator<InvestimentSimulationRequest>
    {
        public InvestmentSimulationRequestValidator()
        {
            RuleFor(x => x.InitialValue)
            .NotNull().WithMessage("InitialValue is required")
            .GreaterThan(0).WithMessage("InitialValue must be greather than zero");

            RuleFor(x => x.Months)
            .NotNull().WithMessage("Months is required")
            .GreaterThan(1).WithMessage(errorMessage: "Amount of months must be greather than 1");
                
        }
    }
}
