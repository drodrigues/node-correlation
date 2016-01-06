var Average = require('./average');
var isNumeric = require('isnumeric');

var calculate = function(values1, values2) {
  if (values1 instanceof Array && values2 instanceof Array) {
    if (values1.length == values2.length) {

      var total = values1.length;
      var values1_average = Average.simple(values1);
      var values2_average = Average.simple(values2);

      sum_values_average = 0;
      sx = 0;
      sy = 0;

      for (var index = 0, l = total; index < l; index ++) {
        var value1 = values1[index];
        var value2 = values2[index];

        x = value1 - values1_average;
        y = value2 - values2_average;

        sum_values_average += (x * y);

        sx += Math.pow(x, 2);
        sy += Math.pow(y, 2);
      }

      n = total - 1;

      sx = sx / n;
      sy = sy / n;

      sx = Math.sqrt(sx);
      sy = Math.sqrt(sy);

      var correlation = (sum_values_average /  (n * sx * sy)).toFixed(9);

      return parseFloat(correlation);
    }
  }

  throw TypeError('Invalid values');
};

module.exports = calculate;
