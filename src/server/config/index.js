import log from 'loglevel'

let config

if (process.env.NODE_ENV === 'production') {
  config = {
    server: {
      host: 'localhost',
      port: 3000
    },
    jsBundle: 'bundle.js'
  }

  log.setLevel('error')
} else {
  config = {
    server: {
      host: 'localhost',
      port: 3000
    },
    jsBundle: 'bundle.js'
  }

  log.enableAll()
}

global.__CLIENT__ = false

export default config
