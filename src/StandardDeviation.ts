import { simple as simpleAverage } from './Average';

export const standardDeviation = (values: number[]): number => {
  const average = simpleAverage(values);
  const diffValues = values.map((val) => val - average);

  const sumSquares = diffValues.map((diff) => Math.pow(diff, 2)).reduce((sum, v) => sum + v, 0);

  const variance = sumSquares / (values.length - 1);

  return Math.sqrt(variance);
};
