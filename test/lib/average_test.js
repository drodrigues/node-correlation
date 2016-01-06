var Average = require('../../lib/average');

describe("Average", function() {

  describe(".simple", function() {
    context("when not receive a array", function() {
      it("raise an error", function(){
        expect(Average.simple, 1).to.throw('Invalid values');
      });

      it("raise an error when the value is null", function(){
        expect(Average.simple, null).to.throw('Invalid values');
      });
    });

    context("when receive a array", function() {
      it("raise an error when have some invalid value", function(){
        expect(Average.simple, ["a", 1, [2]]).to.throw('Invalid values');
      });

      it("raise a error when the array is not numeric", function(){
        expect(Average.simple, ["a", "b", "c"]).to.throw('Invalid values');
      });

      it("return the simple average when the value is valid", function() {
        expect(Average.simple([2, 2, 3])).to.equal(2.33333333);
      });
    });
  });

});
