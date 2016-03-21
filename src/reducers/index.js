import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import asyncActions from './asyncActions';

import checks from './checks';

export default combineReducers({
  asyncActions,
  checks,
  router
});