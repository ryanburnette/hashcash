'use strict';

var rand = require('./rand');

function rules(opts) {
  if (!opts) {
    opts = {};
  }
  if (!opts.seed) {
    opts.seed = rand(32, 16);
  }
  if (!opts.need) {
    opts.need = rand(2, 16);
  }
  return opts;
}

module.exports = rules;
