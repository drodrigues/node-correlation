var isNumeric = require('isnumeric');

module.exports = {
  simple: function(values) {
    if (values instanceof Array) {
      var total = 0;

      for (var i = 0, l = values.length; i < l; i ++) {
        var value = values[i];

        if (!isNumeric(value)) {
          throw TypeError('Invalid values');
        }

        total += value;
      }

      var average = (total / values.length).toFixed(8);

      return parseFloat(average);
    }

    throw TypeError('Invalid values');
  }
}
