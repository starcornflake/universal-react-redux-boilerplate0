import React, { PropTypes } from 'react'

import Todo from './Todo'

const propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            {...todo}
          />
        )
      })}
    </ul>
  )
}

// TodoList.propTypes = propTypes

export default TodoList
