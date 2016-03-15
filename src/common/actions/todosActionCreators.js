import config from '../config'

import {
  CALL_API,
  GET,
  POST,
  PUT,
  DELETE,
} from '../middlewares/apiMiddleware'

export const TODO_ADD = 'TODO_ADD'
export const TODOS_REQUEST = 'TODOS_REQUEST'
export const TODOS_SUCCESS = 'TODOS_SUCCESS'
export const TODOS_FAILURE = 'TODOS_FAILURE'
export const TODOS_SHOULD_FETCH = 'TODOS_SHOULD_FETCH'

let nextTodoId = 0
export function addTodo(text) {
  return {
    type: TODO_ADD,
    id: nextTodoId++,
    text
  }
}

// function requestTodos() {
//   return {
//     type: TODO_REQUEST,
//   }
// }
//
// function receiveTodos(type, todos) {
//   return {
//     type,
//     todos
//   }
// }
//
// function fetchTodos() {
//   return (dispatch) => {
//     dispatch(requestTodos())
//     return axios.get(`${config.api.endpoint}/todos`)
//       .then((res) => {
//         // TODO: If res is valid..
//         return dispatch(receiveTodos(TODO_SUCCESS, res.data))
//       })
//       .catch((err) => {
//         console.log('Error fetching, ', err)
//       })
//   }
// }
//
//
// function shouldFetchTodos(state) {
//   const todos = state.todos;
//   if (todos.items.length === 0) {
//     return true
//   } else if (todos.isFetching) {
//     return false
//   } else {
//     return todos.didInvalidate
//   }
// }
//
// export function fetchTodosIfNeeded() {
//   return (dispatch, getState) => {
//     if (shouldFetchTodos(getState())) {
//       return dispatch(fetchTodos())
//     }
//   }
// }

function shouldFetchTodos(value) {
  return {
    type: TODOS_SHOULD_FETCH,
    shouldFetch: value,
  }
}


export function fetchTodosIfNeeded() {
  // get cookie from state here
  return (dispatch, getState) => {
    const todos = getState().todos
    if (!todos.shouldFetch) {
      return dispatch(shouldFetchTodos(true))
    }
    return dispatch(fetchTodos()) // this returns a promise from the middleware
  }
}

function fetchTodos() {
  return {
    [CALL_API]: {
      types: [TODOS_REQUEST, TODOS_SUCCESS, TODOS_FAILURE],
      endpoint: `${config.api.baseUrl}/todos`,
      method: GET,
    }
  }
}

// {
//   todos: {
//     isFetching: false,
//     items: [
//       {
//         id: 0,
//         text: 'to something',
//         completed: false
//       }
//     ]
//   }
// }
