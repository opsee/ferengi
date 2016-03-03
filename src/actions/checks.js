import { CHECK_URL } from './constants';
import request from '../modules/request';
import testRequest from '../data/testRequest.json';

function getToken() {
  return request
    .post('https://stinkbait.in.opsee.com/token')
    .then(res => {
      return res.body.token;
    });
}

export function checkURL(url) {
  return dispatch => {
    dispatch({
      type: CHECK_URL,
      payload: getToken().then(token => {
        return request
          .post('https://stinkbait.in.opsee.com/check')
          .set('Authorization', `Bearer ${token}`)
          .send(testRequest)
          .then(res => {
            if (res.error) return console.error(res.error);
            const responses = res.body.responses;
            return { data: { token, responses } };
          })
      })
    });
  };
}