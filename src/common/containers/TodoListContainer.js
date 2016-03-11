import React, { Component } from 'react'
import { connect } from 'react-redux'

import TodoList from '../components/TodoList'
import { fetchTodos } from '../actions'

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

const TodoListContainer = React.createClass({
  async componentDidMount() {
    console.log('compDitMount')
    try {
      const { loadTodos } = this.props
      await loadTodos()
      await new Promise((resolve) => {
        setTimeout(() => {
          console.log('prom')
          resolve()
        }, 5000)
      })
    } catch (err) {
      console.log(err)
    }
  },
  render() {
    const { todos } = this.props
    console.log(todos)
    return (
      <TodoList todos={todos} />
    )
  }
})

function mapStateToProps(state) {
  console.log(state)
  return {
    todos: state.todos.items
  }
  // return {
  //   todos: state.todos
  // }
}

function mapDispatchToProps(dispatch) {
  return {
    loadTodos: () => {
      dispatch(fetchTodos())
    }
  }
}

// export default connect(mapStateToProps)(TodoList)
// export default TodoListContainer
export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)
