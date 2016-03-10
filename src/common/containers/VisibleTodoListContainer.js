import React, { Component } from 'react'
import { connect } from 'react-redux'

import TodoList from '../components/TodoList'


class VisibleTodoListContainer extends Component {
  async componentDidMount() {
    
  }
  render() {
    return (
      <TodoList />
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList)
