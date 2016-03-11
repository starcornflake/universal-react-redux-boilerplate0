if (process.env.NODE_ENV === 'production') {
  const config = require('./config.prod')
  // window.__CLIENT__ = true

  module.exports = config
} else {
  const config = require('./config.dev')
  // window.__CLIENT__ = true

  module.exports = config
}
