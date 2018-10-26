import {combineReducers} from 'redux';
import Home from './Home/HomeReducer';
import Routes from './Routes/RoutesReducer'

export default combineReducers({
    Home,
    Routes,
});