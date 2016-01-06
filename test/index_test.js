var correlation = require('../');

describe("Correlation", function() {

  context("version", function() {
    it('return the lib version', function() {
      expect(correlation.version).to.equal('1.0.2')
    });
  });

  context("calc", function() {
    it('return the correlation result', function() {
      var result = correlation.calc([1, 2, 3, 4, 5], [0, 6, 2, 10, 4]);

      expect(result).to.equal(0.493196962)
    });
  });

});
