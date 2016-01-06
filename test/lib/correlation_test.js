var correlation = require('./../../lib/correlation');

describe("Correlation", function() {

  describe(".calculate", function() {
    context("when receive the invalid data", function() {

      it("raise an error when data is null", function() {
        expect(function() {
          correlation(null, null);
        }).to.throw('Invalid values');
      });

      it("raise an error when data is not an array ", function() {
        expect(function() {
          correlation(1, 'b');
        }).to.throw('Invalid values');
      });

      it("raise an error when data has any non-numeric value", function() {
        expect(function() {
          correlation([1, 'a'], [1, 2]);
        }).to.throw('Invalid values');
      });

      it("raise an error when data have diferent size", function() {
        expect(function() {
          correlation([1, 3, 2], [1, 2]);
        }).to.throw('Invalid values');
      });

    });

    context("when receive the valid data", function() {
      it("return the result", function() {
        var result = correlation([1, 2, 3, 4, 5], [0, 6, 2, 10, 4]);

        expect(result).to.equal(0.493196962)
      });
    });
  });

});
