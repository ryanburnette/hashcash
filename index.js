'use strict';

module.exports = function(opts) {
  var obj = {};

  obj.rules = require('./lib/rules')(opts);

  obj.check = function(v) {
    return require('./lib/check')(obj.rules, v);
  };

  obj.solve = function() {
    return require('./lib/solve')(obj.check);
  };

  return obj;
};
