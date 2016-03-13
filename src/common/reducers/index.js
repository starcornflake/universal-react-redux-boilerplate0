import { combineReducers } from 'redux'

import todoReducer from './todosReducer'

const rootReducer = combineReducers({
  todos: todoReducer,
})

export default rootReducer
