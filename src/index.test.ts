import { correlation } from './index';

describe('correlation', () => {
  describe('when receive the invalid data', function () {
    it('raise an error when data is null', function () {
      expect(() => correlation(null, null)).toThrowError('The values should be an array');
    });

    it('raise an error when data is not an array ', function () {
      expect(() => correlation(1, 'b')).toThrowError('The values should be an array');
    });

    it('raise an error when data has any non-numeric value', function () {
      expect(() => correlation([1, 'a'], [1, 2])).toThrowError('The all values should be numeric');
    });

    it('raise an error when data have diferent size', function () {
      expect(() => correlation([1, 3, 2], [1, 2])).toThrowError(
        'The arrays should have the same size'
      );
    });
  });

  describe('when receive the valid data', function () {
    it('return the result', function () {
      var result = correlation([1, 2, 3, 4, 5], [0, 6, 2, 10, 4]);

      expect(result).toEqual(0.4931969619160718);
    });
  });
});
