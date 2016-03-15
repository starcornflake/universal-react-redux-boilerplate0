import React from 'react'
import { Route, IndexRoute } from 'react-router'

import AppContainer from '../containers/AppContainer'
import AuthRouteContainer from '../containers/AuthRouteContainer'
import TodosRouteContainer from '../containers/TodosRouteContainer'

// const routes = (
//   <Route path='/' component={AppContainer}>
//     <IndexRoute component={AuthRouteContainer} />
//     <Route path='/todos' component={TodosRouteContainer} />
//   </Route>
// )
function routes({ dispatch, getState }) {
  return (
    <Route path='/' component={AppContainer}>
      <IndexRoute component={(true && TodosRouteContainer) || AuthRouteContainer} />
      <Route path='/todos' component={TodosRouteContainer} />
    </Route>
  )
}

export default routes
