import React from 'react'

const propTypes = {
  onSubmitUser: React.PropTypes.func.isRequired,
  onUpdateUser: React.PropTypes.func.isRequired,
  header: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired,
}

function Prompt({header, username, onSubmitUser, onUpdateUser}) {
  return (
    <div>
      <h1>{header}</h1>
      <form onSubmit={onSubmitUser}>
        <input
          onChange={onUpdateUser}
          placeholder="Github name"
          type="text"
          value={username}
        />
        <button type="submit">Continue</button>
      </form>
    </div>
  )
}

Prompt.propTypes = propTypes

export default Prompt
