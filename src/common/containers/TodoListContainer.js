import React, { Component } from 'react'
import { connect } from 'react-redux'
import log from 'loglevel'

import TodoList from '../components/TodoList'
import { fetchTodosIfNeeded } from '../actions/todosActionCreators'


function mapStateToProps(state) {
  return {
    todos: state.todos.items,
    // isServer
  }
  // return {
  //   todos: state.todos
  // }
}

function mapDispatchToProps(dispatch) {
  return {
    loadTodos() {
      dispatch(fetchTodosIfNeeded())
    }
  }
}

class TodoListContainer extends Component {
  static fetchData(dispatch) {
    return dispatch(fetchTodosIfNeeded())
  }
  async componentDidMount() {
    // if server rendered, dispatch action to make it false. else, fetch api
    const { todos, loadTodos } = this.props
    // if (todos.lenth == 0) {
      try {
        const todos = await loadTodos()
        // await new Promise((resolve) => {
        //   setTimeout(() => {
        //     console.log('prom')
        //     resolve()
        //   }, 5000)
        // })
      } catch (err) {
        console.log('Error in TodoListContainer', err)
      }
    // }
  }
  componentDidUnMount() {
    // dispatch action to update ssr to false
  }
  render() {
    log.warn('woahkjahslfkjh')
    const { todos } = this.props
    return (
      <TodoList todos={todos} />
    )
  }
}

// function mapStateToProps(state) {
//   return {
//     todos: state.todos.items,
//     // isServer
//   }
//   // return {
//   //   todos: state.todos
//   // }
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     loadTodos() {
//       dispatch(fetchTodosIfNeeded())
//     }
//   }
// }

// export default connect(mapStateToProps)(TodoList)
// export default TodoListContainer
export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)
