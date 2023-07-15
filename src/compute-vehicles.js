export function sortByScore(a, b) {
    return a.score > b.score ? -1 : a.score < b.score ? 1 : 0;
}

function scoreForField(voiture, intervals, field) {
    return intervals.findIndex(
        (interval) =>
            voiture[field] >= interval[0] && voiture[field] < interval[1]
    );
}

export function scorePositif(vehicle, config) {
    const coffreScore = scoreForField(vehicle, coffreIntervals, "trunk");
    const autonomieScore = scoreForField(
        vehicle,
        autonomieIntervals,
        "range"
    );
    const consommationScore = scoreForField(
        vehicle,
        consommationIntervals,
        "consumption"
    );
    const superchargeScore = scoreForField(
        vehicle,
        superchargeIntervals,
        "supercharge"
    );

    return (
        coffreScore * config.trunk +
        autonomieScore * config.range +
        consommationScore * config.consumption +
        superchargeScore * config.supercharge +
        vehicle.quality * config.quality +
        vehicle.practicality * config.practicality +
        vehicle.look * config.look
    );
}

export function scoreNegatif(voiture, config) {
    const prixScore = scoreForField(voiture, prixIntervals, "price");
    const volumeScore = scoreForField(voiture, volumeIntervals, "volume");

    return -(prixScore * config.price + volumeScore * config.volume)
}

const coffreIntervals = [
    [0, 499],
    [500, 524],
    [525, 549],
    [550, 574],
    [575, 599],
    [600, 10000],
];
const autonomieIntervals = [
    [0, 379],
    [380, 419],
    [420, 459],
    [460, 499],
    [500, 539],
    [540, 10000],
];
const superchargeIntervals = [
    [32, 10000],
    [29, 31],
    [26, 28],
    [23, 25],
    [20, 22],
    [0, 19],
];
const consommationIntervals = [
    [23, 10000],
    [21.9, 22.9],
    [20.6, 21.8],
    [19.3, 20.5],
    [18.1, 19.2],
    [0, 18],
];
const volumeIntervals = [
    [0, 12.59],
    [12.6, 13.09],
    [13.1, 13.59],
    [13.6, 14.09],
    [14.1, 14.69],
    [14.7, 10000],
];
const prixIntervals = [
    [0, 41999],
    [42000, 47499],
    [47500, 52999],
    [53000, 57499],
    [57500, 62999],
    [63000, 1000000],
];
