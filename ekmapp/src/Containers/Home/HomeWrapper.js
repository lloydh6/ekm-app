import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Actions } from 'react-native-router-flux';

import * as HomeActions from '../../Actions/Home/HomeActions';
import Home from './Home';

class HomeWrapper extends Component {
    render() {
        return(
            <Home {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    home: state.Home,
    routes: state.Routes,
});

const mapDispatchToProps = (dispatch) => ({
    updateHomeText: (e) => dispatch(HomeActions.updateHomeText(e)),
    goToOrders: () => Actions.orders(),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeWrapper);