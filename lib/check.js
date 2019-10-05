'use strict';

var hash = require('hash.js');

module.exports = function(rules, v) {
  return hash
    .sha256()
    .update(rules.seed + v)
    .digest('hex')
    .startsWith(rules.need);
};
