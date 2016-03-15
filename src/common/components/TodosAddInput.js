import React, { PropTypes } from 'react'

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

function TodosAddInput({ onSubmit }) {
  let input

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        onSubmit(input.value)
        input.value = ''
      }}>
        <input ref={(node) => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

TodosAddInput.propTypes = propTypes

export default TodosAddInput
