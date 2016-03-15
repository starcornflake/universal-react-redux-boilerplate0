import React, { Component } from 'react'
import { connect } from 'react-redux'

import LoginForm from '../components/LoginForm'
import { login } from '../actions/authActionCreators'

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (username, password) => {
      dispatch(login(username, password))
    }
  }
}

class LoginContainer extends Component {
  render() {
    const { onSubmit } = this.props
    return (
      <LoginForm onSubmit={onSubmit} />
    )
  }
}

export default connect(undefined, mapDispatchToProps)(LoginContainer)
