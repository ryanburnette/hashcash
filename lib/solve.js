'use strict';

function solve(check) {
  function next(i) {
    var solution = i + 1;
    return check(solution).then(function(result) {
      if (result) {
        return solution;
      }
      if (solution % 200 === 0) {
        return pause().then(function() {
          return next(solution);
        });
      } else {
        return next(solution);
      }
    });
  }
  return next(0);
}

function pause() {
  return new Promise(function(resolve) {
    setTimeout(resolve, 1);
  });
}

module.exports = solve;
