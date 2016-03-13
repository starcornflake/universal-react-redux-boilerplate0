import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'


import rootReducer from '../reducers'
import api from '../middlewares/api'

let configureStore

if (process.env.NODE_ENV === 'production') {
  configureStore = (initialState) => {
    const store = createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(thunk, api)
      )
    )
    return store;
  }
} else {
  const DevTools = require('../components/DevTools').default
  const createLogger = require('redux-logger')
  const logger = createLogger({
    actionTransformer: (action) => ({
      ...action,
      type: String(action.type),
    })
  })
  configureStore = (initialState) => {
    const store = createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(thunk, api, logger),
        DevTools.instrument()
      )
    )
    return store
  }
}

export default configureStore
