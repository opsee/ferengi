import _ from 'lodash';
import { SIGNUP } from './constants';
import { trackEvent } from '../modules/analytics';
import { ONBOARD, ONBOARD_SIGNUP } from '../constants/analyticsConstants';
import fetch from '../modules/fetch';
import yeller from '../modules/yeller';

function doSignup(data = {}) {
  return new Promise((resolve, reject) => {
    fetch('https://auth.opsee.com/signups/activate', {
      method: 'post',
      body: JSON.stringify(_.pick(data, ['email', 'referrer', 'name']))
    })
    .then(res => {
      if (!res.ok){
        return res.json().then(json => {
          throw new Error(json.message);
        }).catch(reject);
      }

      // Track successful signups only
      trackEvent(ONBOARD, ONBOARD_SIGNUP, data);

      return res.json();
    })
    .then(resolve)
    .catch(err => {
      yeller.report(err);
      reject(err);
    });
  });
}

/**
 * @param {object} data
 * @param {string} data.name
 * @param {string} data.email
 * @param {string} data.referrer
 */
export function signup(data) {
  return dispatch => {
    dispatch({
      type: SIGNUP,
      payload: doSignup(data)
    });
  };
}

