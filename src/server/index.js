import path from 'path';

import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../common/config/routes';

import Root from '../common/containers/Root';
import configureStore from '../common/store/configureStore';

import config from '../common/config';

const app = express();
const port = process.env.PORT || config.server.port;

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackConfigDev = require('../../webpack.config.dev');
  const compiler = webpack(webpackConfigDev);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfigDev.output.publicPath,
    hot: false
  }));
}

app.use('/public', express.static(path.resolve(__dirname, '../../public')))

app.get('*', handleRender);

// function handleRender(req, res, err) {
//   res.send(renderFullPage());
// }

function handleRender(req, res, err) {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    // `RouterContext` is the what `Router` renders. `Router` keeps these
    // `props` in its state as it listens to `browserHistory`. But on the
    // server our app is stateless, so we need to use `match` to
    // get these props before rendering.
    const store = configureStore();
    const appHtml = renderToString(<Root store={store}><RouterContext {...props}/></Root>)
    // dump the HTML into a template, lots of ways to do this, but none are
    // really influenced by React Router, so we're just using a little
    // function, `renderPage`
    res.send(renderFullPage(appHtml))
  })
}

function renderFullPage(html, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <script src="/public/js/${config.jsBundle}"></script>
      </body>
    </html>
    `
}

app.listen(port, () => {
  console.log('server started');
});
