import {createStore, compose/* , applyMiddleware*/} from 'redux'
import rootReducer from './Reducers/RootReducer';

const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

const composedEnhancer = compose(...enhancerList);

const initStore = () => createStore(rootReducer, {}, composedEnhancer);

module.exports = {
  initStore
};