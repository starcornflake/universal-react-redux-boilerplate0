'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  onSubmitInput: _react.PropTypes.func.isRequired
};

function AddTodoInput(_ref) {
  var onSubmitInput = _ref.onSubmitInput;

  var input = void 0;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'form',
      { onSubmit: function onSubmit(e) {
          onSubmitInput(e, input.value);
          input.value = '';
        } },
      _react2.default.createElement('input', { ref: function ref(node) {
          input = node;
        } }),
      _react2.default.createElement(
        'button',
        { type: 'submit' },
        'Add Todo'
      )
    )
  );
}

AddTodoInput.propTypes = propTypes;

exports.default = AddTodoInput;
//# sourceMappingURL=AddTodoInput.js.map