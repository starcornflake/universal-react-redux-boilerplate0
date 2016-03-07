# Universal React Redux Boilerplate
Oddly enough, we're not using webpack's hot loading feature. It adds an unnecessary amount of noise to our code, and the tools built around it is fragile.



## Usage

### Commands
1. **Development:** `npm run dev`
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
