import {combineReducers} from 'redux';
import {routerStateReducer} from 'redux-router'; // 'redux-router';

export default combineReducers({
  router: routerStateReducer
});