# multipronged

A wrapper for [connect](https://github.com/senchalabs/connect) which
allows array arguments for `use`.

## Installation

```sh
npm install --save multipronged
```

## API

Behaves like [connect](https://github.com/senchalabs/connect) except
that an array of functions can be provided for the `use` method rather
than just a single function.

```js
const app = require('multipronged');

// Without a route:
app.use([middleware1, middleware2, ...etc]);

// Or, with a route:
app.use('route1', [middleware1, middleware2, ...etc]);

// The non-array signatures are also still available:
app.use(middleware);
app.use('route2', otherMiddleware);
```
