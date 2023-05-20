import { standardDeviation } from './StandardDeviation';

describe('StandardDeviation', () => {
  it('return the standard deviation', () => {
    expect(standardDeviation([1, 2, 3, 4, 5])).toEqual(1.5811388300841898);
  });
});
