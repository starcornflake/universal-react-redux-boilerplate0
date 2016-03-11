import axios from 'axios'

import {
  ADD_TODO,
  REQUEST_TODOS,
  RECEIVE_TODOS,
} from './ActionTypes'
import config from '../config'

let nextTodoId = 0
export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}

function requestTodos() {
  return {
    type: REQUEST_TODOS,
  }
}

function receiveTodos(todos) {
  return {
    type: RECEIVE_TODOS,
    todos: todos
  }
}

function fetchTodos() {
  return (dispatch) => {
    dispatch(requestTodos())
    return axios.get(`${config.api.endpoint}/todos`)
      .then((res) => {
        console.log('Got data:', res)
        dispatch(receiveTodos(res.data))
      })
      .catch((err) => {
        console.log('Error fetching, ', err)
      })
  }
}


function shouldFetchTodos(state) {
  const todos = state.todos;
  console.log('shouldFetchTodos, ', todos)
  if (todos.items.length === 0) {
    return true
  } else if (todos.isFetching) {
    return false
  } else {
    return todos.didInvalidate
  }
}

export function fetchTodosIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchTodos(getState())) {
      return dispatch(fetchTodos())
    }
  }
}
