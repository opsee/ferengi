import _ from 'lodash';
import data from '../data/responses';
import { handleActions } from 'redux-actions';
import {yeller} from '../modules';
import {
  CHECK_URL,
  SET_URL
} from '../actions/constants';

// Checks state is an object mapping URL to catfish response data.
// Components can keep track of the URL they want to look up in their state.
const initial = data;

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
      const { url, token, responses } = action.payload.data;
      return _.assign({}, state, {
        [url]: { token, responses }
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