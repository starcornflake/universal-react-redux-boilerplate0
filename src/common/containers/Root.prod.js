import React from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import routes from '../config/routes'
import DevTools from './DevTools'

const propTypes = {
  store: React.PropTypes.object.isRequired
}

class Root extends React.Component {
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

Root.propTypes = propTypes

export default Root
