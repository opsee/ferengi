import _ from 'lodash';
import { handleActions } from 'redux-actions';
import { CHECK_URL } from '../actions/constants';

const initial = {
  catfish: {
    token: null,
    responses: []
  }
};

export default handleActions({
  [CHECK_URL]: {
    next(state, action) {
      const token = action.payload.data.token;
      const responses = action.payload.data.responses;

      return _.assign({}, state, {
        catfish: { token, responses }
      });
    }
  }
}, initial);