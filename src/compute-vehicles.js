export function sortByScore(a, b) {
  return a.score > b.score ? -1 : a.score < b.score ? 1 : 0;
}

function scoreForField(voiture, intervals, field) {
  return intervals.findIndex((interval) => voiture[field] >= interval[0] && voiture[field] < interval[1]) ?? 0;
}

export function scorePHEVPositive(vehicle, config) {
  const trunkScore = scoreForField(vehicle, trunkIntervals, 'trunk');
  const fuelTankScore = scoreForField(vehicle, fuelTankIntervals, 'tank');
  const fuelConsumptionScore = scoreForField(vehicle, fuelConsumptionIntervals, 'consumption');
  const superchargeScore = scoreForField(vehicle, hybridSuperchargeIntervals, 'supercharge');

  const trunkScoreWeighted = trunkScore * config.trunk;
  const fuelTankScoreWeighted = fuelTankScore * config.tank;
  const consumptionScoreWeighted = fuelConsumptionScore * config.consumption;
  const superchargeScoreWeighted = superchargeScore * config.supercharge;
  const qualityScoreWeighted = vehicle.quality * config.quality;
  const lookScoreWeighted = vehicle.look * config.look;
  const practicalityScoreWeighted = vehicle.practicality * config.practicality;

  return {
    total:
      trunkScoreWeighted +
      fuelTankScoreWeighted +
      consumptionScoreWeighted +
      superchargeScoreWeighted +
      qualityScoreWeighted +
      lookScoreWeighted +
      practicalityScoreWeighted,
    trunk: trunkScoreWeighted,
    tank: fuelTankScoreWeighted,
    consumption: consumptionScoreWeighted,
    supercharge: superchargeScoreWeighted,
    quality: qualityScoreWeighted,
    look: lookScoreWeighted,
    practicality: practicalityScoreWeighted,
  };
}

export function scorePositive(vehicle, config) {
  const coffreScore = scoreForField(vehicle, trunkIntervals, 'trunk');
  const autonomieScore = scoreForField(vehicle, electricRangeIntervals, 'range');
  const consommationScore = scoreForField(vehicle, electricConsumptionIntervals, 'consumption');
  const superchargeScore = scoreForField(vehicle, electricSuperchargeIntervals, 'supercharge');

  const trunkScoreWeighted = coffreScore * config.trunk;
  const rangeScoreWeighted = autonomieScore * config.range;
  const consumptionScoreWeighted = consommationScore * config.consumption;
  const superchargeScoreWeighted = superchargeScore * config.supercharge;
  const qualityScoreWeighted = vehicle.quality * config.quality;
  const lookScoreWeighted = vehicle.look * config.look;
  const practicalityScoreWeighted = vehicle.practicality * config.practicality;

  return {
    total:
      trunkScoreWeighted +
      rangeScoreWeighted +
      consumptionScoreWeighted +
      superchargeScoreWeighted +
      qualityScoreWeighted +
      lookScoreWeighted +
      practicalityScoreWeighted,
    trunk: trunkScoreWeighted,
    range: rangeScoreWeighted,
    consumption: consumptionScoreWeighted,
    supercharge: superchargeScoreWeighted,
    quality: qualityScoreWeighted,
    look: lookScoreWeighted,
    practicality: practicalityScoreWeighted,
  };
}

export function scoreNegative(voiture, config) {
  const prixScore = scoreForField(voiture, priceIntervals, 'price');
  const volumeScore = scoreForField(voiture, volumeIntervals, 'volume');
  const priceScoreWeighted = prixScore * config.price;
  const volumeScoreWeighted = volumeScore * config.volume;

  return {
    total: -(priceScoreWeighted + volumeScoreWeighted),
    price: -priceScoreWeighted,
    volume: -volumeScoreWeighted,
  };
}

const trunkIntervals = [
  [0, 420],
  [421, 474],
  [475, 499],
  [601, 10000],
  [500, 529],
  [530, 600],
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
