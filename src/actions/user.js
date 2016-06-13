import _ from 'lodash';
import cookie from 'cookie';

import { SIGNUP, SIGNUP_WITH_CHECK } from './constants';
import { trackEvent } from '../modules/analytics';
import { ONBOARD, ONBOARD_SIGNUP, ONBOARD_FERENGI_CHECK } from '../constants/analyticsConstants';
import { makeCheck } from '../modules/checks';
import fetch from '../modules/fetch';
import yeller from '../modules/yeller';

function setUser(userData) {
  // explicitly set domain so it works in Emissary as well
  // See: https://tools.ietf.org/html/rfc2109
  const domain = process.env.NODE_ENV === 'development' ? 'localhost' : 'opsee.com';
  document.cookie = cookie.serialize('ferengi-token', userData.token, {
    domain,
    maxAge: 3600 // seconds (1 hour)
  });
}

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
    })
    .then(userData => {
      // Persist the temporary cookie so it can be used for Emissary
      setUser(userData);
      // Track successful signups only
      trackEvent(ONBOARD, ONBOARD_SIGNUP, data);
      resolve(userData);
    })
    .catch(err => {
      yeller.report(err);
      reject(err);
    });
  });
}

function createCheck(userData, data) {
  const email = _.get(userData, 'user.email');
  const { url, assertions } = data;
  const check = makeCheck(url, email, assertions);
  const checks = [check];
  return new Promise((resolve, reject) => {
    fetch('https://api.opsee.com/graphql', {
      method: 'post',
      headers: {
        'Authorization': `Bearer ${userData.token}`
      },
      body: JSON.stringify({
        query: `
          mutation Mutation ($checks: [Check]){
            checks(checks: $checks) {
              id
            }
          }
        `,
        variables: { checks }
      })
    })
    .then(res => {
      if (!res.ok){
        return res.json().then(json => {
          throw new Error(json.message);
        }).catch(reject);
      }
      return res.json();
    })
    .then(checkResponse => {
      if (!_.isEmpty(checkResponse.errors)) {
        const error = _.first(checkResponse.errors);
        throw new Error(_.get(error, 'message'));
      }
      trackEvent(ONBOARD, ONBOARD_FERENGI_CHECK, data);
      resolve(checkResponse);
    })
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

/**
 * @param {object} data
 * @param {string} data.name
 * @param {string} data.email
 * @param {string} data.referrer
 * @param {string} url
 * @param {object[]} assertions
 */
export function signupWithCheck(data) {
  return dispatch => {
    dispatch({
      type: SIGNUP_WITH_CHECK,
      payload: doSignup(data)
      .then(userData => {
        dispatch({
          type: SIGNUP,
          payload: userData
        });
        return createCheck(userData, data);
      })
      .then(() => {
        // FIXME better config management. As-is, webpack will strip out
        // the process.env stuff and replace the line with just a string
        // (e.g., const location = 'production') but it looks messy!
        const location = process.env.NODE_ENV === 'production' ? 'https://app.opsee.com/' : 'http://localhost:8080';
        window.location = location;
      })
      .catch(err => {
        yeller.report(err);
        console.warn(err);
        throw err;
      })
    });
  };
}

