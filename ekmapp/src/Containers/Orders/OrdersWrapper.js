import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as HomeActions from '../../Actions/Home/HomeActions';
import Orders from './Orders';

class HomeWrapper extends Component {
    render() {
        return(
            <Orders {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    routes: state.Routes,
});

const mapDispatchToProps = (dispatch) => ({
    updateHomeText: (e) => dispatch(HomeActions.updateHomeText(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeWrapper);