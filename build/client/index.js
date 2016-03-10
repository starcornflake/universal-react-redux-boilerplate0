'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _Root = require('../common/components/Root');

var _Root2 = _interopRequireDefault(_Root);

var _configureStore = require('../common/store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _routes = require('../common/config/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = window.__INITIAL_STATE__;
var store = (0, _configureStore2.default)(initialState);
console.log('__CLIENT__:', __CLIENT__);
_reactDom2.default.render(_react2.default.createElement(
  _Root2.default,
  { store: store },
  _react2.default.createElement(_reactRouter.Router, { routes: _routes2.default, history: _reactRouter.browserHistory })
), document.getElementById('root'));
//# sourceMappingURL=index.js.map