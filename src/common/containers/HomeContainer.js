import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import AddTodoContainer from './AddTodoContainer'
import TodoListContainer from './TodoListContainer'
import { fetchTodosIfNeeded } from '../actions/todos'

class HomeContainer extends Component {
  static fetchData(dispatch) {
    // Only route components' fetchAll can be reached. Inner components won't.
    // So this is a good place to fetchAll for the HomeComponent's things
    // and fetchAll for inner components. (eg AddTodoContainer.fetchAll)
    return Promise.all([
      TodoListContainer.fetchData(dispatch)
    ])
  }
  componentDidMount() {
    console.log(this.props.children)
    console.log('compDitMount')
    // try {
    //   await new Promise((resolve) => {
    //     setTimeout(() => {
    //       console.log('prom')
    //       resolve()
    //     }, 5000)
    //   })
    // } catch (err) {
    //   console.log(err)
    // }
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
