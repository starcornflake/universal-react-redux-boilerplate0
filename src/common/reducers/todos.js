import {
  ADD_TODO,
  REQUEST_TODOS,
  RECEIVE_TODOS,
} from '../actions/ActionTypes'

const todoItem = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    default:
      return state
  }
}

const todoItems = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todoItem(undefined, action)
      ]
    default:
      return state
  }
}

function todos(state = {
  isFetching: false,
  items: [],
}, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: todoItems(state.items, action)
      }
    case REQUEST_TODOS:
      return {
        ...state
      }
    case RECEIVE_TODOS:
      return {
        ...state
      }
    default:
      return state
  }
}

export default todos
// export default todoItems
