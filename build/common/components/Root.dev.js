'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _routes = require('../config/routes');

var _routes2 = _interopRequireDefault(_routes);

var _DevTools = require('./DevTools');

var _DevTools2 = _interopRequireDefault(_DevTools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  store: _react.PropTypes.object.isRequired
};

function Root(_ref) {
  var children = _ref.children;
  var store = _ref.store;

  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      'div',
      null,
      children,
      _react2.default.createElement(_DevTools2.default, null)
    )
  );
}

Root.propTypes = propTypes;

module.exports = Root;
//# sourceMappingURL=Root.dev.js.map