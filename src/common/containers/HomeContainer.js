import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import AddTodoContainer from './AddTodoContainer'
import TodoListContainer from './TodoListContainer'
import { fetchComponentsData } from '../utils/serverFetchHelpers'

class HomeContainer extends Component {
  static fetchData(dispatch, routerProps) {
    // Only route components' fetchAll can be reached. Inner components won't.
    // So this is a good place to fetchAll for the HomeComponent's things
    // and fetchAll for inner components. (eg AddTodoContainer.fetchAll).
    // Use dispatch() that returns a promise, instead of creating your own promise

    return Promise.all(fetchComponentsData(dispatch, routerProps, [
      AddTodoContainer,
      TodoListContainer,
    ]))
  }
  render() {
    return (
      <div>
        <AddTodoContainer />
        <TodoListContainer />
      </div>
    )
  }
}




export default HomeContainer
