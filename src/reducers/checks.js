import { handleActions } from 'redux-actions';
import { CHECK_URL } from '../actions/constants';

const initial = {

};

export default handleActions({
  [CHECK_URL]: {
    next(state) {
      console.log('i gotcha!');
      return state;
    }
  }
}, initial);