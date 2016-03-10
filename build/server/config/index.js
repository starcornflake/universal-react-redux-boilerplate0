'use strict';

if (process.env.NODE_ENV === 'production') {
  var config = require('./config.prod');
  global.__PRODUCTION__ = true;
  global.__CLIENT__ = false;

  module.exports = config;
} else {
  var _config = require('./config.dev');
  global.__PRODUCTION__ = false;
  global.__CLIENT__ = false;

  module.exports = _config;
}
//# sourceMappingURL=index.js.map