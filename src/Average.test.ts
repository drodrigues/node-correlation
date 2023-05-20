import { simple } from './Average';

describe('Average', () => {
  describe('.simple', () => {
    const entries = [2, 2, 3];

    it('return the average value', () => {
      expect(simple(entries)).toEqual(2.3333333333333335);
    });
  });
});
