'use strict';

var crypto = require('crypto');

function rand(len, base) {
  if (!len) {
    len = 5;
  }
  if (!base) {
    base = 16;
  }
  if (![10, 16].includes(base)) {
    throw new Error('base can be 10 or 16');
  }
  var str = '';
  while (str.length < len) {
    str = str + get(base);
  }
  if (str.length > len) {
    str = str.substring(0, len);
  }
  return str;
}

function get(base) {
  var rand = crypto.randomBytes(2).toString('hex');
  if (base === 10) {
    return parseInt(rand, 16);
  } else {
    return rand;
  }
}

module.exports = rand;
