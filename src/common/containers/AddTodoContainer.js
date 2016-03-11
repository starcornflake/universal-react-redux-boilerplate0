import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions/todos'
import AddTodoInput from '../components/AddTodoInput'

class AddTodoContainer extends Component {
  componentDidMount() {
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
      <AddTodoInput />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmitInput: (e, text) => {
      e.preventDefault()
      if (!text.trim()) {
        return
      }
      dispatch(addTodo(text))
    }
  }
}

export default connect(undefined, mapDispatchToProps)(AddTodoInput)
