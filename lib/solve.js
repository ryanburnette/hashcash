'use strict';

module.exports = function(check) {
  var solution;
  var i = 0;
  while (!solution) {
    if (check(i)) {
      solution = i;
    }
    i = i + 1;
  }
  return solution;
};
