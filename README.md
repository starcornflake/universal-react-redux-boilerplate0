# Universal React Redux Boilerplate
Oddly enough, we're not using webpack's hot loading feature. It adds an unnecessary amount of noise to our code, and the tools built around it is fragile.



## Usage

### Commands
1. **Development:**
  * `npm run dev` doesn't restart server automatically (use this if working on client side as it's much faster, since only webpack is rebuilding)
  * `npm run devs` restarts server automatically
2. **Build:** `npm run build`
3. **Production:** `npm run start`



## Packages

### Essentials
* `babel-cli` - provides CLI for building/development
* `babel-core`, `babe-loader`, `babel-preset-{es2015,react,stage-2}` - for auto-transpiling
* `nodemon` - restart server after a change
* `webpack`, `webpack-dev-middleware` - so we don't have to use webpack-dev-server
* `express`
* `react`, `react-dom`
* `react-router`
* `redux`, `redux-thunk`
* `redux-devtools`, `redux-devtools-{dock-monitor,log-monitor}`

### Goodies
* `axios` - http requests using promises
* `morgan` - http request logger


## Under the hood
### Client
* `<Root>` acts as the root component wrapper. It simply requires a store and a `<Router>` child. This makes it easy to render on both client and server. Also, this makes it possible to only render `<DevTools>` if in development mode.
