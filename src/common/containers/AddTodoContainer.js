import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions'
import AddTodoInput from '../components/AddTodoInput'

class AddTodoContainer extends Component {
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
