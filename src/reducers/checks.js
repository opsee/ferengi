import _ from 'lodash';
import { handleActions } from 'redux-actions';
import {yeller} from '../modules';
import {
  CHECK_URL,
  SET_URL
} from '../actions/constants';

const initial = {
  token: null,
  url: null,
  responses: [],
  error: undefined
};

export default handleActions({
  [SET_URL]: {
    next(state, action) {
      return _.assign({}, state, {
        url: action.payload.data
      });
    }
  },

  [CHECK_URL]: {
    next(state, action) {
      const token = action.payload.data.token;
      const responses = action.payload.data.responses;

      return _.assign({}, state, {
        token,
        responses,
        error: null,
      });
    },
    throw(state, action){
      yeller.reportAction(state, action);
      const catfish = _.assign({}, state, {
        error: action.payload
      });
      return _.assign({}, state, catfish);
    }
  }
}, initial);