import {
  TODO_ADD,
  TODOS_REQUEST,
  TODOS_SUCCESS,
  TODOS_FAILURE,
  TODOS_SSR_UPDATE,
} from '../actions/todosActionCreators'

const item = (state = {}, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    default:
      return state
  }
}

const items = (state = [], action) => {
  switch (action.type) {
    case TODO_ADD:
      return [
        ...state,
        item(undefined, action)
      ]
    default:
      return state
  }
}

function reducer(state = {
  isFetching: false,
  shouldFetch: true,
  items: [],
}, action) {
  switch (action.type) {
    case TODOS_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case TODOS_SUCCESS:
      return {
        ...state,
        shouldFetch: action.shouldFetch,
        items: action.data
      }
    case TODOS_FAILURE:
      return {
        ...state,
        isFetching: false,
      }
    case TODO_ADD:
      return {
        ...state,
        items: items(state.items, action)
      }
    case TODOS_SSR_UPDATE:
      return {
        ...state,
        ssr: action.ssr
      }
    default:
      return state
  }
}

export default reducer
// export default todoItems
