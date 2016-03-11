import React, { Component, PropTypes } from 'react'

class AppContainer extends Component {
  // static fetchData(dispatch) {
  //   console.log('app container')
  //   return new Promise(() => {})
  // }
  render() {
    const { children } = this.props

    return (
      <div>
        {children}
      </div>
    )
  }
}

export default AppContainer
