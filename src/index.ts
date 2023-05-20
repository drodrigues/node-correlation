import isNumeric from 'fast-isnumeric';

import { simple as simpleAverage } from './Average';
import { standardDeviation } from './StandardDeviation';

const isValidNumericArray = (values: number[]) => {
  if (!(values instanceof Array)) throw TypeError('The values should be an array');

  const hasNonNumericValue = values.find((value: number) => !isNumeric(value));

  if (hasNonNumericValue) throw TypeError('The all values should be numeric');
};

export const correlation = (xValues: number[], yValues: number[]) => {
  isValidNumericArray(xValues);
  isValidNumericArray(yValues);

  if (xValues.length !== yValues.length) throw TypeError('The arrays should have the same size');

  const standardDeviationX = standardDeviation(xValues);
  const averageX = simpleAverage(xValues);

  const standardDeviationY = standardDeviation(yValues);
  const averageY = simpleAverage(yValues);
  const total = xValues.length;

  let sumOfSquares = 0;

  for (var index = 0, l = total; index < l; index++) {
    const x = xValues[index];
    const y = yValues[index];

    sumOfSquares += (x - averageX) * (y - averageY);
  }

  const result = sumOfSquares / ((xValues.length - 1) * standardDeviationX * standardDeviationY);
  return result;
};
