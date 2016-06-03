import _ from 'lodash';
import cookie from 'cookie';
import URL from 'url';

import { SIGNUP, SIGNUP_WITH_CHECK } from './constants';
import { trackEvent } from '../modules/analytics';
import { ONBOARD, ONBOARD_SIGNUP, ONBOARD_FERENGI_CHECK } from '../constants/analyticsConstants';
import fetch from '../modules/fetch';
import yeller from '../modules/yeller';

function setUser(userData) {
  document.cookie = cookie.serialize('ferengi-token', userData.token, {
    // domain: 'opsee.com', // explicitly set domain so it works on app.opsee.com
    domain: 'localhost', // FIXME
    maxAge: 3600 // seconds (6 hours)
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
      return res.json();
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

// FIXME figure out a way to share this code with Emissary
function makeCheck(userData, data) {
  const {user} = userData;
  const {url, assertions} = data;
  const parsedURL = URL.parse(url);
  const protocol = _.get(parsedURL, 'protocol', '').replace(/\:$/, ''); // lib returns protocol as e.g. "https:"
  const port = parsedURL.port || (protocol === 'https' ? 443 : 80);
  return {
    'target': {
      'id': url,
      'type': 'external_host'
    },
    'http_check': {
      'headers': [], // Headers always empty from Ferengi
      'path': _.get(parsedURL, 'pathname', '/'),
      'port': port,
      'protocol': protocol,
      'verb': 'GET' // Always GET from Ferengi
    },
    'name': `Http ${_.get(parsedURL, 'hostname', url)}`,
    'notifications': [{
      type: 'email',
      value: user.email
    }],
    assertions
  };
}

function createCheck(userData, data) {
  const check = makeCheck(userData, data);
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
      .then(checkResponse => {
        const checkID = _.chain(checkResponse).get('data.checks').first().get('id').value();
        window.location = `http://localhost:8080/activated?id=${checkID}`;
      })
      .catch(err => {
        yeller.report(err);
        console.warn(err);
        throw err;
      })
    });
  };
}

