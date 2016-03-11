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
  didInvalidate: false,
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
        ...state,
        isFetching: true,
        didInvalidate: false,
      }
    case RECEIVE_TODOS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.todos,
      }
    default:
      return state
  }
}

export default todos
// export default todoItems
