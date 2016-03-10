'use strict';

require('babel-polyfill');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _Root = require('../common/components/Root');

var _Root2 = _interopRequireDefault(_Root);

var _configureStore = require('../common/store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _routes = require('../common/config/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || _config2.default.server.port;

if (process.env.NODE_ENV !== 'production') {
  var webpack = require('webpack');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackConfigDev = require('../../webpack.config.dev');
  var compiler = webpack(webpackConfigDev);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfigDev.output.publicPath,
    hot: false
  }));
  app.use((0, _morgan2.default)('dev'));
} else {}

app.use('/public', _express2.default.static(_path2.default.resolve(__dirname, '../../public')));
app.use((0, _serveFavicon2.default)(_path2.default.join(__dirname, '../../public/favicon.ico')));

app.get('*', handleRender);

// function handleRender(req, res, err) {
//   res.send(renderFullPage());
// }

function handleRender(req, res, err) {
  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
    if (err) {
      // error during route matching
      res.status(500).send(err.message);
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      // we have a match
      var store = (0, _configureStore2.default)();

      var appHtml = (0, _server.renderToString)(_react2.default.createElement(
        _Root2.default,
        { store: store },
        _react2.default.createElement(_reactRouter.RouterContext, props)
      ));

      res.send(renderFullPage(appHtml, store.getState()));
    } else {
      // no match
      res.status(404).send('Not Found');
    }
  });
}

function renderFullPage(html, initialState) {
  return '\n    <!doctype html>\n    <html>\n      <head>\n        <title>Redux Universal Example</title>\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + '</script>\n        <script src="/public/js/' + _config2.default.jsBundle + '"></script>\n      </body>\n    </html>\n    ';
}

app.listen(port, function () {
  if (process.env.NODEMON === 'enabled') {
    console.log('Server started on port ' + port + '. (webpack + nodemon)');
  } else if (process.env.NODEMON === 'disabled') {
    console.log('Server started on port ' + port + '. (webpack)');
  } else {
    console.log('Server started on port ' + port + '.');
  }
});
//# sourceMappingURL=index.js.map