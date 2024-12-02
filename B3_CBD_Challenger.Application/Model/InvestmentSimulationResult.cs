namespace B3_CBD_Challenger.Application.Model;

public record InvestmentSimulationResult(decimal InitialValue, int Months 
                                        , decimal GrossInvestment, decimal NetInvestment
                                        , decimal TaxApplied);
