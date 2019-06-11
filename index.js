var createServer = require('connect');

var isArray = function (arg) {
  // Though slightly efficient, for unit testing, we don't
  //   cache `Array.isArray`
  return Array.isArray
    ? Array.isArray(arg)
    : Object.prototype.toString.call(arg) === '[object Array]';
};

var forEach = function (arr, cb) {
  if (arr.forEach) {
    arr.forEach(cb);
    return;
  }
  for (var i = 0, len = arr.length; i < len; i++) {
    cb(arr[i]);
  }
};

var multipronged = function () {
  var server = createServer();
  var use = server.use;

  server.use = function (route, fn) {
    if (isArray(route)) {
      forEach(route, function (rte) {
        use.call(server, rte, fn);
      });
      return this;
    }
    if (isArray(fn)) {
      forEach(fn, function (f) {
        use.call(server, route, f);
      });
      return this;
    }
    return use.apply(server, arguments);
  };
  return server;
};

module.exports = multipronged;
