import log from 'loglevel'

let config

if (process.env.NODE_ENV === 'production') {
  config = {
    api: {
      baseUrl: 'http://bumpysounds.com/api'
    }
  }

  log.setLevel('error')
} else {
  config = {
    api: {
      baseUrl: 'http://localhost:3000/api'
    }
  }

  log.enableAll()
}

if (__CLIENT__) {
  window.log = log
} else {
  global.log = log
}

export default config
