# @ryanburnette/[hashcash][1]

A browser-compatible implementation of [hashcash][2].

## Usage

Require and create an instance. Pass in optional seed string.
Pass in optional need string to increase complexity.

```js
var hashcash = require('@ryanburnette/hashcash');
var h = hashcash();
```

Check to see if a value passes.

```js
h.check(0);
```

Do the work.

```js
h.solve();
```

[1]: https://code.ryanburnette.com/ryanburnette/hashcash
[2]: http://www.hashcash.org/
