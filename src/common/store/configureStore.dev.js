import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import rootReducer from '../reducers'
const logger = createLogger({
  actionTransformer: (action) => ({
    ...action,
    type: String(action.type),
  })
})

function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, logger)
    )
  )

  return store
}

module.exports = configureStore
