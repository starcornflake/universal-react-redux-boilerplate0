import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import AddTodoContainer from './AddTodoContainer'
import VisibleTodoListContainer from './VisibleTodoListContainer'
import { fetchTodos } from '../actions'

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <AddTodoContainer />
        <VisibleTodoListContainer />
      </div>
    )
  }
}




export default HomeContainer
