import { createAction } from 'redux-actions';
import { CHECK_URL } from './constants';

export function checkURL(url) {
  return dispatch => {
    dispatch({
      type: CHECK_URL,
      payload: new Promise((resolve, reject) => {
        console.log('done!');
        resolve({ url });
      })
    });
  };
}