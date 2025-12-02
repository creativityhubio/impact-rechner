export interface ImpactData {
  protectedArea: number;
  protectedFootball: number;
  co2Bound: number;
  co2Equivalent: number;
  bioProduction: number;
  jobs: number;
  animals: number;
  localValue: number;
  trees5y: number;
  totalCo210y: number;
  monthlyPacht: number;
  yearlyPacht: number;
}

// Impact calculation constants based on original HTML formulas
const IMPACT_CALCULATIONS = {
  // protectedArea = investment * 0.4
  protectedAreaRatio: 0.4,
  // co2Bound = Math.round(protectedArea / 228)
  co2BindingRatio: 228,
  // co2Equivalent = Math.round(co2Bound / 10)
  co2EquivalentRatio: 10,
  // bioProduction = Math.round(investment / 4)
  bioProductionRatio: 4,
  // jobs = Math.ceil(investment / 20000)
  jobsRatio: 20000,
  // animals = Math.round(protectedArea / 80)
  animalsRatio: 80,
  // localValue = Math.round(investment * 0.2)
  localValueRatio: 0.2,
  // trees5y = Math.round(investment / 80)
  trees5yRatio: 80,
  // Fixed 8% lease rate per year
  pachtRate: 0.08,
  // Football field size in square meters
  footballFieldSize: 7140
};

export function calculateImpacts(investmentAmount: number): ImpactData {
  // Calculate protected area in square meters
  const protectedArea = investmentAmount * IMPACT_CALCULATIONS.protectedAreaRatio;
  const protectedFootball = protectedArea / IMPACT_CALCULATIONS.footballFieldSize;
  
  // Calculate CO2 binding
  const co2Bound = Math.round(protectedArea / IMPACT_CALCULATIONS.co2BindingRatio);
  const co2Equivalent = Math.round(co2Bound / IMPACT_CALCULATIONS.co2EquivalentRatio);
  
  // Calculate bio production
  const bioProduction = Math.round(investmentAmount / IMPACT_CALCULATIONS.bioProductionRatio);
  
  // Calculate jobs (families)
  const jobs = Math.ceil(investmentAmount / IMPACT_CALCULATIONS.jobsRatio);
  
  // Calculate animals
  const animals = Math.round(protectedArea / IMPACT_CALCULATIONS.animalsRatio);
  
  // Calculate local economic value
  const localValue = Math.round(investmentAmount * IMPACT_CALCULATIONS.localValueRatio);
  
  // Calculate trees in 5 years
  const trees5y = Math.round(investmentAmount / IMPACT_CALCULATIONS.trees5yRatio);
  
  // Calculate total CO2 in 10 years
  const totalCo210y = co2Bound * 10;
  
  // Calculate lease payments (8% per year)
  const monthlyPacht = Math.ceil((investmentAmount * IMPACT_CALCULATIONS.pachtRate) / 12);
  const yearlyPacht = Math.ceil(investmentAmount * IMPACT_CALCULATIONS.pachtRate);

  return {
    protectedArea: Math.round(protectedArea),
    protectedFootball,
    co2Bound,
    co2Equivalent,
    bioProduction,
    jobs,
    animals,
    localValue,
    trees5y,
    totalCo210y,
    monthlyPacht,
    yearlyPacht
  };
}
