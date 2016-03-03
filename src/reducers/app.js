import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router'; // 'redux-router';
import checks from './checks';

export default combineReducers({
  router,
  checks
});