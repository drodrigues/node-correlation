import { version } from './index';

describe('Correlation', () => {
  it('return the version', () => {
    expect(version).toEqual('2.0.0');
  });
});
