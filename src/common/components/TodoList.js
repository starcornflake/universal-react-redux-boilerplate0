import React, { PropTypes } from 'react'

import Todo from './Todo'

const propTypes = {
  todos: PropTypes.array.isRequired,
}

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => {
        <Todo
          key={todo.id}
          {...todo}
        />
      })}
    </ul>
  )
}

TodoList.propTypes = propTypes

export default TodoList
