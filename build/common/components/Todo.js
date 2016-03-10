'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  text: _react.PropTypes.string.isRequired,
  completed: _react.PropTypes.bool.isRequired
};

function Todo(_ref) {
  var text = _ref.text;
  var completed = _ref.completed;

  return _react2.default.createElement(
    'li',
    null,
    text
  );
}

Todo.propTypes = propTypes;

exports.default = Todo;
//# sourceMappingURL=Todo.js.map