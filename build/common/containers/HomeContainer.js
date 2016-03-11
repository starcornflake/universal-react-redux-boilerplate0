'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _AddTodoContainer = require('./AddTodoContainer');

var _AddTodoContainer2 = _interopRequireDefault(_AddTodoContainer);

var _TodoListContainer = require('./TodoListContainer');

var _TodoListContainer2 = _interopRequireDefault(_TodoListContainer);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeContainer = function (_Component) {
  _inherits(HomeContainer, _Component);

  function HomeContainer() {
    _classCallCheck(this, HomeContainer);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HomeContainer).apply(this, arguments));
  }

  _createClass(HomeContainer, [{
    key: 'componentDidMount',

    // Only route components' fetchAll can be reached. Inner components won't.
    // So this is a good place to fetchAll for the HomeComponent's things
    // and fetchAll for inner components. (eg AddTodoContainer.fetchAll)
    value: function componentDidMount() {
      console.log(this.props.children);
      console.log('compDitMount');
      // try {
      //   await new Promise((resolve) => {
      //     setTimeout(() => {
      //       console.log('prom')
      //       resolve()
      //     }, 5000)
      //   })
      // } catch (err) {
      //   console.log(err)
      // }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_AddTodoContainer2.default, null),
        _react2.default.createElement(_TodoListContainer2.default, null)
      );
    }
  }], [{
    key: 'fetchAll',
    value: function fetchAll() {}
  }]);

  return HomeContainer;
}(_react.Component);

exports.default = HomeContainer;
//# sourceMappingURL=HomeContainer.js.map