import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as Actions from '../../Actions/Home/HomeActions';
import Home from './Home';

class HomeWrapper extends Component {
    render() {
        console.log(this.props);
        return(
            <Home {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    home: state.Home,
});

const mapDispatchToProps = (dispatch) => ({
    updateHomeText: (e) => dispatch(Actions.updateHomeText(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeWrapper);