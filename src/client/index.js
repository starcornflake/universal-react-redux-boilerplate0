console.log(process.env.NODE_ENV);
console.log('hi');

import config from '../common/config';
console.log(config);

import React from 'react';
import ReactDOM from 'react-dom';

import Root from '../common/containers/Root';
import configureStore from '../common/store/configureStore';
import routes from '../common/config/routes';

const store = configureStore();


import { Router, browserHistory } from 'react-router';
// import routes from '../config/routes';

ReactDOM.render(
  <Root store={store}><Router routes={routes} history={browserHistory} /></Root>,
  document.getElementById('root')
);
