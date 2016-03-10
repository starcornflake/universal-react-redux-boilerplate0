'use strict';

if (process.env.NODE_ENV === 'production') {
  var config = require('./config.prod');
  window.__CLIENT__ = true;

  module.exports = config;
} else {
  var _config = require('./config.dev');
  window.__CLIENT__ = true;

  module.exports = _config;
}
//# sourceMappingURL=index.js.map