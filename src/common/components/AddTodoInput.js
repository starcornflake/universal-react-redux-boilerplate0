import React, { PropTypes } from 'react'

const propTypes = {
  onSubmitInput: PropTypes.func.isRequired,
}

function AddTodoInput({ onSubmitInput }) {
  let input

  return (
    <div>
      <form onSubmit={(e) => {
        onSubmitInput(e, input.value)
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

AddTodoInput.propTypes = propTypes

export default AddTodoInput
