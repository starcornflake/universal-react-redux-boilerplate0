'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionTypes = require('../actions/ActionTypes');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var todo = function todo(state, action) {
  switch (action.type) {
    case _ActionTypes.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    default:
      return state;
  }
};

var todos = function todos() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _ActionTypes.ADD_TODO:
      return [].concat(_toConsumableArray(state), [todo(undefined, action)]);
    default:
      return state;
  }
};

exports.default = todos;
//# sourceMappingURL=todos.js.map