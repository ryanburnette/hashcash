'use strict';

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
  var array = new Uint32Array(16);
  var n = parseInt(window.crypto.getRandomValues(array).join(''));
  var str = n.toString(base);
  if (base === 10) {
    str = str.split('.')[1];
  }
  str = str.substring(0, 5);
  return str;
}

module.exports = rand;
