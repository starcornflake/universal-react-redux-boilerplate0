import {
  ADD_TODO,
  REQUEST_TODOS,
  RECEIVE_TODOS,
} from './ActionTypes'
import config from '../config'
import axios from 'axios'

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

function receiveTodos() {
  return {
    type: RECEIVE_TODOS
  }
}

export function fetchTodos() {
  return (dispatch) => {
    dispatch(requestTodos())
    return axios.get(`${config.api.endpoint}/todos`)
      .then((data) => {
        console.log('Got data:', data)
        dispatch(receiveTodos(data))
      })
      .catch(err, () => {
        console.log('Error fetching, ', err)
      })
  }
}
