import React, {Component} from 'react';
import {initStore} from './Store';
import {Provider, connect} from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';

import Home from './Containers/Home/HomeWrapper';
import Orders from './Containers/Orders/OrdersWrapper';
import More from './Containers/More/More';

const store = initStore();
const RouterWithRedux = connect()(Router);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="main" tabs={true} tabBarStyle={{backgroundColor: '#ffffff'}}>
            <Scene key="home" component={Home} title="Home" initial={true} />
            <Scene key="orders" component={Orders} title="Orders" />
            <Scene key="more" component={More} title="More" />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}