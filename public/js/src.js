'use strict';

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import gitRecApp from './public/js/reducers.js'
import Screen from './public/js/components/Screen.js'


let store = createStore(gitRecApp);

render(
  <Provider store={store}>
    <Screen />
  </Provider>,
  document.getElementById('content')
);
