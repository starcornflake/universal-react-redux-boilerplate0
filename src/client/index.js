console.log(process.env.NODE_ENV);
console.log('hi');

import config from '../common/config';
console.log(config);

import React from 'react';
import ReactDOM from 'react-dom';

import Root from '../common/containers/Root';
import configureStore from '../common/store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
