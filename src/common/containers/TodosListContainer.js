import React, { Component } from 'react'
import { connect } from 'react-redux'
import log from 'loglevel'

import TodosList from '../components/TodosList'
import { fetchTodosIfNeeded } from '../actions/todosActionCreators'


function mapStateToProps(state) {
  return {
    todos: state.todos.items,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTodosData: () => {
      dispatch(fetchTodosIfNeeded())
    }
  }
}

class TodosListContainer extends Component {
  static fetchData(dispatch) {
    return dispatch(fetchTodosIfNeeded())
  }
  async componentDidMount() {
    // if server rendered, dispatch action to make it false. else, fetch api
    const { fetchTodosData } = this.props
    try {
      const todos = await fetchTodosData()
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
      <TodosList todos={todos} />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosListContainer)
