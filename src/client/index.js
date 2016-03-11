import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'

// import config from './config'
import Root from '../common/components/Root'
import configureStore from '../common/store/configureStore'
import routes from '../common/config/routes'


const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState)
console.log('__CLIENT__:', __CLIENT__)
console.log('process.env.NODE_ENV:', process.env.NODE_ENV)
ReactDOM.render(
  <Root store={store}>
    <Router routes={routes} history={browserHistory} />
  </Root>,
  document.getElementById('root')
)
