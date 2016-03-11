import React, { Component } from 'react'
import { connect } from 'react-redux'

import TodoList from '../components/TodoList'
import { fetchTodosIfNeeded } from '../actions/todos'

// class TodoListContainer extends Component {
//   async componentWillMount() {
//     console.log('compDitMount')
//     try {
//       await new Promise((resolve) => {
//         setTimeout(() => {
//           console.log('prom')
//           resolve()
//         }, 5000)
//       })
//     } catch (err) {
//       console.log(err)
//     }
//   }
//   render() {
//     return (
//       <TodoList />
//     )
//   }
// }

class TodoListContainer extends Component {
  static fetchData(dispatch) {
    return dispatch(fetchTodosIfNeeded())
  }
  async componentDidMount() {
    console.log('compDitMount')
    const { todos, loadTodos } = this.props
    // if (todos.lenth == 0) {
      console.log('todos:', todos)
      try {
        const todos = await loadTodos()
        console.log(todos)
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
  render() {
    console.log('TodoListContainer rendered')
    const { todos } = this.props
    return (
      <TodoList todos={todos} />
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos.items
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

// export default connect(mapStateToProps)(TodoList)
// export default TodoListContainer
export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)
