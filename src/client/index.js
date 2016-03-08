import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'

import Root from '../common/containers/Root'
import configureStore from '../common/store/configureStore'
import routes from '../common/config/routes'

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState)

ReactDOM.render(
  <Root store={store}>
    <Router routes={routes} history={browserHistory} />
  </Root>,
  document.getElementById('root')
)
