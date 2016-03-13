import React, { Component } from 'react'
import { connect } from 'react-redux'
import log from 'loglevel'

import TodoList from '../components/TodoList'
import { fetchTodosIfNeeded } from '../actions/todosActionCreators'


function mapStateToProps(state) {
  return {
    todos: state.todos.items,
  }
}

class TodoListContainer extends Component {
  static fetchData(dispatch) {
    return dispatch(fetchTodosIfNeeded())
  }
  async componentDidMount() {
    // if server rendered, dispatch action to make it false. else, fetch api
    const { dispatch } = this.props
    try {
      const todos = await dispatch(fetchTodosIfNeeded())
    } catch (err) {
      console.log('Error in TodoListContainer', err)
    }
  }
  componentDidUnMount() {
    // dispatch action to update shouldFetch to true
  }
  render() {
    const { todos } = this.props
    return (
      <TodoList todos={todos} />
    )
  }
}

export default connect(mapStateToProps)(TodoListContainer)
