'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTodo = addTodo;

var _ActionType = require('./ActionType');

var nextTodoId = 0;
function addTodo(text) {
  return {
    type: _ActionType.ADD_TODO,
    id: nextTodoId++,
    text: text
  };
}
//# sourceMappingURL=index.js.map