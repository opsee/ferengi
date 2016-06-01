import _ from 'lodash';
import { handleActions } from 'redux-actions';
import { SIGNUP } from '../actions/constants';
import { yeller } from '../modules';

const initial = {
  user: null,
  token: null,
  intercom_hmac: null
};

export default handleActions({
  [SIGNUP]: {
    next(state, action) {
      return _.assign({}, state, action.payload);
    },
    throw: yeller.reportAction,
  }
}, initial);