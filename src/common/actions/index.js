import {
  ADD_TODO,
} from './ActionTypes'

let nextTodoId = 0
export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}
