if (process.env.NODE_ENV === 'production') {
  const config = require('./config.prod')
  global.__PRODUCTION__ = true
  global.__CLIENT__ = false

  module.exports = config
} else {
  const config = require('./config.dev')
  global.__PRODUCTION__ = false
  global.__CLIENT__ = false

  module.exports = config
}
