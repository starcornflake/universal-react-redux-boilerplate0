import React, { PropTypes } from 'react'

const propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
}

function Todo({ text, completed }) {
  return (
    <li>
      {text}
    </li>
  )
}

Todo.propTypes = propTypes

export default Todo
