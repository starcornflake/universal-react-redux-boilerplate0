import React from 'react'

function LoginForm({ onSubmit }) {
  let username
  let password

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => {
        e.preventDefault()
        onSubmit(username.value, password.value)
        username.value = ''
        password.value = ''
      }}>
        <h3>Username</h3>
        <input ref={(node) => {
          username = node
        }} />
        <h3>Password</h3>
        <input
          type="password"
          ref={(node) => {
            password = node
        }} />
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
