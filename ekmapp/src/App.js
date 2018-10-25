import React, {Component} from 'react';
import {initStore} from './Store';
import {Provider} from 'react-redux';

import Home from './Containers/Home/HomeWrapper';

const store = initStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}