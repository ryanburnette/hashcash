# [hashcash][1]

[![npm version](https://badge.fury.io/js/%40ryanburnette%2Fhashcash.svg)](https://badge.fury.io/js/%40ryanburnette%2Fhashcash)

An asyncronous implementation of [hashcash][2] for Node.js and the browser.

## Usage

Require and create an instance. Pass in optional seed string. Pass in optional
need string to increase complexity.

```js
var hashcash = require('@ryanburnette/hashcash');
var h = hashcash();
```

Check to see if a value passes.

```js
h.check(0).then(function(result) {
  console.log(result);
});
```

Do the work.

```js
h.solve().then(function(solution) {
  console.log(solution);
});
```

## Package

The package works as-is on Node.js and will work with webpack or rollup for
packaged browser use.

For direct browser implementation, use `./dist/index.js` or via cdn...

```
<script src="https://unpkg.com/@ryanburnette/hashcash/dist/index.js" />
```

[1]: https://github.com/ryanburnette/hashcash
[2]: http://www.hashcash.org/
[3]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API
[4]: https://coolaj86.com
