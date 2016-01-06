var correlation = require('../');

describe("Correlation", function() {
  context("version", function() {
    it('return the lib version', function() {
      expect(correlation.version).to.equal('1.0.0')
    });
  });
});
