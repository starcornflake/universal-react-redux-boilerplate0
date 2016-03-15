import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions/todosActionCreators'
import TodosAddInput from '../components/TodosAddInput'

class TodosAddContainer extends Component {
  render() {
    const { onSubmit } = this.props
    return (
      <TodosAddInput onSubmit={onSubmit}/>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (text) => {
      if (!text.trim()) {
        return
      }
      dispatch(addTodo(text))
    }
  }
}

export default connect(undefined, mapDispatchToProps)(TodosAddContainer)
