'use strict';

var hat = require('hat');
var merge = require('lodash.merge');

module.exports = function(opts) {
  var defaults = {
    seed: hat(32),
    need: '00'
  };
  if (!opts) {
    opts = {};
  }
  return merge(defaults, opts);
};
