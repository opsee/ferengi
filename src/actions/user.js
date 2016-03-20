import _ from 'lodash';
import { SIGNUP } from './constants';
import fetch from '../modules/fetch';

/**
 * @param {string} url
 */
export function signup(data = {}) {
  return dispatch => {
    dispatch({
      type: SIGNUP,
      payload: new Promise((resolve, reject) => {
        fetch('https://auth.opsee.com/signups/new', {
          method: 'post',
          body: JSON.stringify(_.pick(data, ['email', 'referrer', 'name']))
        })
        .then(res => {
          if (!res.ok){
            return res.json().then(json => {
              throw new Error(json.message);
            }).catch(reject);
          }
          return res.json();
        })
        .then(resolve)
        .catch(reject);
      })
    });
  };
}