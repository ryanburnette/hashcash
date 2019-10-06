'use strict';

function utf8ToBinaryString(str) {
  var escstr = encodeURIComponent(str);
  var binstr = escstr.replace(/%([0-9A-F]{2})/g, function(match, p1) {
    return String.fromCharCode(parseInt(p1, 16));
  });
  return binstr;
}

function binaryStringToBuffer(binstr) {
  var buf;
  if ('undefined' !== typeof Uint8Array) {
    buf = new Uint8Array(binstr.length);
  } else {
    buf = [];
  }
  Array.prototype.forEach.call(binstr, function(ch, i) {
    buf[i] = ch.charCodeAt(0);
  });
  return buf;
}

function utf8ToBuffer(str) {
  var binstr = utf8ToBinaryString(str);
  var buf = binaryStringToBuffer(binstr);
  return buf;
}

function hash(str) {
  var data = str;
  if ('string' === typeof data) {
    data = utf8ToBuffer(str);
  }
  return window.crypto.subtle
    .digest('SHA-256', data)
    .then(function(hashBuffer) {
      var hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray
        .map(function(b) {
          return b.toString(16).padStart(2, '0');
        })
        .join('');
    });
}

module.exports = hash;
