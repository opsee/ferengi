import { CHECK_URL } from './constants';
import request from '../modules/request';

export function checkURL(url) {
  return dispatch => {
    dispatch({
      type: CHECK_URL,
      payload: request
          .post('https://stinkbait.in.opsee.com/token')
          .then(res => {
            const token = res.body.token;
            console.log('got token', token);
            return { data: { token } }
          })
    });
  };
}