import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import routes from '../config/routes'

const propTypes = {
  store: PropTypes.object.isRequired
}

function Root({children, store}) {
  return (
    <Provider store={store}>
      <div>
        {children}
      </div>
    </Provider>
  )
}

Root.propTypes = propTypes

module.exports = Root