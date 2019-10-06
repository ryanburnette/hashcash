'use strict';

var hash = require('./hash');

function check(rules, v) {
  return hash(rules.seed + v).then(function(result) {
    return result.startsWith(rules.need);
  });
}

module.exports = check;
