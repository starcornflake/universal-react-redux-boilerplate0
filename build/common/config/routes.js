'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _AppContainer = require('../containers/AppContainer');

var _AppContainer2 = _interopRequireDefault(_AppContainer);

var _HomeContainer = require('../containers/HomeContainer');

var _HomeContainer2 = _interopRequireDefault(_HomeContainer);

var _TodoListContainer = require('../containers/TodoListContainer');

var _TodoListContainer2 = _interopRequireDefault(_TodoListContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _AppContainer2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _HomeContainer2.default })
);

exports.default = routes;
//# sourceMappingURL=routes.js.map