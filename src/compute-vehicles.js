export function sortByScore(a, b) {
  return a.score > b.score ? -1 : a.score < b.score ? 1 : 0;
}

function scoreForField(voiture, intervals, field) {
  return intervals.findIndex((interval) => voiture[field] >= interval[0] && voiture[field] <= interval[1]) ?? 0;
}

export function scorePHEVPositive(vehicle, config) {
  const powerScore = scoreForField(vehicle, powerIntervals, 'power');
  const trunkScore = scoreForField(vehicle, trunkIntervals, 'trunk');
  const tankScore = scoreForField(vehicle, fuelTankIntervals, 'tank');
  const fuelConsumptionScore = scoreForField(vehicle, fuelConsumptionIntervals, 'consumption');
  const superchargeScore = scoreForField(vehicle, hybridSuperchargeIntervals, 'supercharge');

  const powerScoreWeighted = powerScore * config.power;
  const trunkScoreWeighted = trunkScore * config.trunk;
  const tankScoreWeighted = tankScore * config.tank;
  const consumptionScoreWeighted = fuelConsumptionScore * config.consumption;
  const superchargeScoreWeighted = superchargeScore * config.supercharge;
  const qualityScoreWeighted = vehicle.quality * config.quality;
  const lookScoreWeighted = vehicle.look * config.look;
  const practicalityScoreWeighted = vehicle.practicality * config.practicality;

  return {
    total:
      powerScoreWeighted +
      trunkScoreWeighted +
      tankScoreWeighted +
      consumptionScoreWeighted +
      superchargeScoreWeighted +
      qualityScoreWeighted +
      lookScoreWeighted +
      practicalityScoreWeighted,
    power: powerScoreWeighted,
    powerScore,
    trunk: trunkScoreWeighted,
    trunkScore,
    tank: tankScoreWeighted,
    tankScore,
    consumption: consumptionScoreWeighted,
    consumptionScore: fuelConsumptionScore,
    supercharge: superchargeScoreWeighted,
    superchargeScore,
    quality: qualityScoreWeighted,
    look: lookScoreWeighted,
    practicality: practicalityScoreWeighted,
  };
}

export function scorePositive(vehicle, config) {
  const powerScore = scoreForField(vehicle, powerIntervals, 'power');
  const trunkScore = scoreForField(vehicle, trunkIntervals, 'trunk');
  const rangeScore = scoreForField(vehicle, electricRangeIntervals, 'range');
  const consumptionScore = scoreForField(vehicle, electricConsumptionIntervals, 'consumption');
  const superchargeScore = scoreForField(vehicle, electricSuperchargeIntervals, 'supercharge');

  const powerScoreWeighted = powerScore * config.power;
  const trunkScoreWeighted = trunkScore * config.trunk;
  const rangeScoreWeighted = rangeScore * config.range;
  const consumptionScoreWeighted = consumptionScore * config.consumption;
  const superchargeScoreWeighted = superchargeScore * config.supercharge;
  const qualityScoreWeighted = vehicle.quality * config.quality;
  const lookScoreWeighted = vehicle.look * config.look;
  const practicalityScoreWeighted = vehicle.practicality * config.practicality;

  return {
    total:
      powerScoreWeighted +
      trunkScoreWeighted +
      rangeScoreWeighted +
      consumptionScoreWeighted +
      superchargeScoreWeighted +
      qualityScoreWeighted +
      lookScoreWeighted +
      practicalityScoreWeighted,
    power: powerScoreWeighted,
    powerScore,
    trunk: trunkScoreWeighted,
    trunkScore,
    range: rangeScoreWeighted,
    rangeScore,
    consumption: consumptionScoreWeighted,
    consumptionScore,
    supercharge: superchargeScoreWeighted,
    superchargeScore,
    quality: qualityScoreWeighted,
    look: lookScoreWeighted,
    practicality: practicalityScoreWeighted,
  };
}

export function scoreNegative(voiture, config) {
  const priceScore = scoreForField(voiture, priceIntervals, 'price');
  const volumeScore = scoreForField(voiture, volumeIntervals, 'volume');

  const priceScoreWeighted = priceScore * config.price;
  const volumeScoreWeighted = volumeScore * config.volume;

  return {
    total: -(priceScoreWeighted + volumeScoreWeighted),
    price: -priceScoreWeighted,
    priceScore,
    volume: -volumeScoreWeighted,
    volumeScore,
  };
}

const powerIntervals = [
  [10, 1000],
  [8, 9.9],
  [6, 7.9],
  [5, 6.9],
  [4.1, 4.9],
  [0, 4],
];
const trunkIntervals = [
  [0, 420],
  [421, 474],
  [475, 520],
  [601, 10000],
  [521, 549],
  [550, 600],
];
const electricRangeIntervals = [
  [360, 399],
  [400, 439],
  [440, 469],
  [470, 509],
  [510, 539],
  [540, 10000],
];
const fuelTankIntervals = [
  [25, 34],
  [35, 42],
  [43, 49],
  [50, 54],
  [55, 59],
  [60, 100],
];
const hybridSuperchargeIntervals = [
  [90, 120],
  [71, 89],
  [51, 70],
  [31, 50],
  [21, 30],
  [0, 20],
];
const electricSuperchargeIntervals = [
  [32, 40],
  [29, 31],
  [26, 28],
  [23, 25],
  [20, 22],
  [0, 19],
];
const electricConsumptionIntervals = [
  [23, 25],
  [21.9, 22.9],
  [20.6, 21.8],
  [19.3, 20.5],
  [18.1, 19.2],
  [0, 18],
];
const fuelConsumptionIntervals = [
  [10, 12],
  [8.9, 9.9],
  [7.9, 8.8],
  [7, 7.8],
  [6.1, 6.9],
  [0, 6],
];

const volumeIntervals = [
  [0, 12.59],
  [12.6, 13.09],
  [13.1, 13.59],
  [13.6, 14.09],
  [14.1, 14.69],
  [14.7, 10000],
];
const priceIntervals = [
  [0, 47999],
  [48000, 51999],
  [52000, 55999],
  [56000, 62999],
  [63000, 69999],
  [70000, 1000000],
];
