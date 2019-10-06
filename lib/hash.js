'use strict';

var crypto = require('crypto');

function hash(str) {
  return Promise.resolve().then(function() {
    var buf = Buffer.from(str);
    return crypto
      .createHash('sha256')
      .update(buf)
      .digest('hex');
  });
}

module.exports = hash;
