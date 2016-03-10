import {
  ADD_TODO,
} from './ActionType'

let nextTodoId = 0
export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}
