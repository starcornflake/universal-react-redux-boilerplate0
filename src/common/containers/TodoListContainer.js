import React, { Component } from 'react'
import { connect } from 'react-redux'

import TodoList from '../components/TodoList'


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
    return (
      <TodoList todos={todos}/>
    )
    // return (
    //   <h1>woah</h1>
    // )
  }
})

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

// export default connect(mapStateToProps)(TodoList)
// export default TodoListContainer
export default connect(mapStateToProps)(TodoListContainer)
