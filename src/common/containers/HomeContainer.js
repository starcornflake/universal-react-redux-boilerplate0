import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import AddTodoContainer from './AddTodoContainer'
import TodoListContainer from './TodoListContainer'
import { fetchTodos } from '../actions'

class HomeContainer extends Component {
  static fetchAll() {
    // Only route components' fetchAll can be reached. Inner components won't.
    // So this is a good place to fetchAll for the HomeComponent's things
    // and fetchAll for inner components. (eg AddTodoContainer.fetchAll)
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
