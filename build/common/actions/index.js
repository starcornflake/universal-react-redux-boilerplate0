'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTodo = addTodo;

var _ActionTypes = require('./ActionTypes');

var nextTodoId = 0;
function addTodo(text) {
  return {
    type: _ActionTypes.ADD_TODO,
    id: nextTodoId++,
    text: text
  };
}
//# sourceMappingURL=index.js.map