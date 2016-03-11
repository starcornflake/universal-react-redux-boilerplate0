import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import AppContainer from '../containers/AppContainer'
import HomeContainer from '../containers/HomeContainer'
import TodoListContainer from '../containers/TodoListContainer'

const routes = (
  <Route path='/' component={AppContainer}>
    <IndexRoute component={HomeContainer} />
  </Route>
)

export default routes
