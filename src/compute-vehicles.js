import electricVehicles from './datasets/electric-vehicles.json';
import notSelectedElectricVehicles from './datasets/not-selected-electric-vehicles.json';
import hybridVehicles from './datasets/hybrid-vehicles.json';
import {
  electricConsumptionIntervals,
  electricRangeIntervals,
  electricSuperchargeIntervals,
  fuelConsumptionIntervals,
  fuelTankIntervals,
  hybridSuperchargeIntervals,
  powerIntervals,
  priceIntervals,
  surfaceIntervals,
  trunkIntervals,
  volumeIntervals,
} from './intervals';

export function computeResults(config, datasetName, setResults) {
  const res = [];
  if (datasetName === 'EV') {
    localStorage.setItem('ev-config', JSON.stringify(config));
    [...electricVehicles, ...notSelectedElectricVehicles].forEach((vehicle) => {
      const scoreGood = scorePositive(vehicle, config);
      const scoreBad = scoreNegative(vehicle, config);
      const score = Math.round((scoreGood.total + scoreBad.total) * 10) / 10;
      res.push({ vehicle, score, scoreGood, scoreBad });
    });
  } else if (datasetName === 'PHEV') {
    localStorage.setItem('phev-config', JSON.stringify(config));
    hybridVehicles.forEach((vehicle) => {
      const scoreGood = scorePHEVPositive(vehicle, config);
      const scoreBad = scoreNegative(vehicle, config);
      const score = Math.round((scoreGood.total + scoreBad.total) * 10) / 10;
      res.push({ vehicle, score, scoreGood, scoreBad });
    });
  }

  res.sort(sortByScore);

  setResults(res);
}

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
  const surfaceScore = scoreForField(voiture, surfaceIntervals, 'surface');

  const priceScoreWeighted = priceScore * config.price;
  const volumeScoreWeighted = volumeScore * config.volume;
  const surfaceScoreWeighted = surfaceScore * config.surface;

  return {
    total: -(priceScoreWeighted + volumeScoreWeighted + surfaceScoreWeighted),
    price: -priceScoreWeighted,
    priceScore,
    volume: -volumeScoreWeighted,
    volumeScore,
    surface: -surfaceScoreWeighted,
    surfaceScore,
  };
}

