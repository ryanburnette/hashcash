# [hashcash][1]

[![repo](https://img.shields.io/badge/repository-Github-black.svg?style=flat-square)](https://github.com/ryanburnette/hashcash) [![npm](https://img.shields.io/badge/package-NPM-green.svg?style=flat-square)](https://www.npmjs.com/package/@ryanburnette/hashcash)

An asynchronous implementation of [hashcash][2] for Node.js and the browser.

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

For direct browser implementation, use `./dist/hashcash.js` or via cdn...

```html
<script src="https://unpkg.com/@ryanburnette/hashcash/dist/hashcash.js" />
```

[1]: https://github.com/ryanburnette/hashcash.git
[2]: http://www.hashcash.org/
[3]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API
[4]: https://coolaj86.com
