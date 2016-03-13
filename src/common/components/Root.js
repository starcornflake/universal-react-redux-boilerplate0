// if (process.env.NODE_ENV === 'production') {
//   module.exports = require('./Root.prod')
// } else {
//   module.exports = require('./Root.dev')
// }


import React from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import routes from '../config/routes'

let Root

if (process.env.NODE_ENV === 'production') {
  const propTypes = {
    store: React.PropTypes.object.isRequired
  }
  class RootProd extends React.Component {
    render() {
      return (
        <Provider store={this.props.store}>
          <div>
            {this.props.children}
          </div>
        </Provider>
      )
    }
  }
  RootProd.propTypes = propTypes
  Root = RootProd
} else {
  const DevTools = require('./DevTools').default

  const propTypes = {
    store: React.PropTypes.object.isRequired
  }
  class RootDev extends React.Component {
    render() {
      return (
        <Provider store={this.props.store}>
          <div>
            {this.props.children}
            <DevTools />
          </div>
        </Provider>
      )
    }
  }
  RootDev.propTypes = propTypes
  Root = RootDev
}

export default Root
