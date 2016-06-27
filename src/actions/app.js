import _ from 'lodash';

import * as catfish from '../modules/catfish';
import * as emissary from '../modules/emissary';
import { isDefaultCheck, makeCheck } from '../modules/checks';
import { trackEvent } from '../modules/analytics';
import fetch from '../modules/fetch';
import yeller from '../modules/yeller';

import { ONBOARD, ONBOARD_FERENGI_CHECK, ONBOARD_SIGNUP } from '../constants/analyticsConstants';
import { CHECK_URL, SET_URL, SIGNUP, SIGNUP_WITH_CHECK } from './constants';

function parseJSON(res) {
  if (!res.ok){
    return res.json().then(json => {
      throw new Error(json.message);
    }).catch(reject);
  }
  return res.json();
}

function doSignup(data = {}) {
  return new Promise((resolve, reject) => {
    fetch('https://auth.opsee.com/signups/activate', {
      method: 'post',
      body: JSON.stringify(_.pick(data, ['email', 'referrer']))
    })
    .then(parseJSON)
    .then(userData => {
      // Persist the temporary cookie so it can be used for Emissary
      emissary.setUser(userData);
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
  const { url, assertions } = data;
  if (isDefaultCheck(url, assertions)) {
    return Promise.resolve();
  }

  const email = _.get(userData, 'user.email');
  const check = makeCheck(url, email, assertions);

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
        variables: {
          checks: [check]
        }
      })
    })
    .then(parseJSON)
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
        .then(parseJSON)
        .then(resolve)
        .catch(err => {
          yeller.report(err);
          reject(err);
        });
      })
    });
  };
}

/**
 * Signs up with a check. This is its own action/dispatch so that it's easier
 * to track XHR state as a whole.
 *
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
        return emissary.redirectToEmissary();
      })
    });
  };
}

/**
 * @param {string} url
 */
export function checkURL(url) {
  return dispatch => {
    dispatch({
      type: SET_URL,
      payload: {
        data: url
      }
    });

    dispatch({
      type: CHECK_URL,
      payload: catfish.check(url)
    });
  };
}