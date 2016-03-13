import 'babel-polyfill'
import path from 'path'
import express from 'express'
import morgan from 'morgan'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import favicon from 'serve-favicon'
import cookieParser from 'cookie-parser'

import serverConfig from './config'
import api from './config/api'
import routes from '../common/config/routes'
import configureStore from '../common/store/configureStore'
import Root from '../common/components/Root'
import { fetchRouteComponentsData } from '../common/utils/serverFetchHelpers'

const app = express()
const port = process.env.PORT || serverConfig.server.port

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackConfigDev = require('../../webpack.config.dev')
  const compiler = webpack(webpackConfigDev)
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfigDev.output.publicPath,
    hot: false
  }))
  app.use(morgan('dev'))
} else {
  log.setLevel('error')
}

app.use('/public', express.static(path.resolve(__dirname, '../../public')))
app.use(favicon(path.join(__dirname, '../../public/favicon.ico')))

app.use(cookieParser())

app.use('/api', api)

app.get('*', handleRender)

// function handleRender(req, res, err) {
//   res.send(renderFullPage());
// }

function handleRender(req, res, err) {
  console.log('req to server', req.headers)
  match({ routes, location: req.url }, (err, redirect, routerProps) => {
    if (err) {
      // error during route matching
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (routerProps) {
      // we have a match
      const store = configureStore()
      Promise.all(fetchRouteComponentsData(store.dispatch, routerProps))
        .then(() => {
          const appHtml = renderToString(
            <Root store={store}>
              <RouterContext {...routerProps} />
            </Root>
          )
          res.send(renderFullPage(appHtml, store.getState()))
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send("Something went wrong", err);
        })
    } else {
      // no match
      res.status(404).send('Not Found')
    }
  })
}

function renderFullPage(html, initialState) {
  html = html ? html : ''
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
        <script src="/public/js/${serverConfig.jsBundle}"></script>
      </body>
    </html>
    `
}

app.listen(port, () => {
  if (process.env.NODEMON === 'enabled') {
    console.log(`${process.env.NODE_ENV} server started on port ${port}. (webpack + nodemon)`)
  } else if (process.env.NODEMON === 'disabled') {
    console.log(`${process.env.NODE_ENV} server started on port ${port}. (webpack)`)
  } else {
    console.log(`${process.env.NODE_ENV} server started on port ${port}.`)
  }
})
