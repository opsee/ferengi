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
    });
  }
  return res.json();
}

function doSignup(data = {}) {
//   return Promise.resolve({
//   "intercom_hmac": "8a09813d61e6465e0b2b194146650557edc9d9aef72a1d0158cd81e37fd60258",
//   "token": "eyJhbGciOiJBMTI4R0NNS1ciLCJlbmMiOiJBMTI4R0NNIiwiaXYiOiJabFBxRTFaZ3JHUXBfUUNnIiwidGFnIjoiQ0Z6RXJHN1Q4eTBiU01GTTFmTXZSdyJ9.my-Q6dCn6KLSgSwhb9XVRw.5Ctj5POxOiYSqKti.E1adSoQlwCw_o0dRSPaeHZ1Xns27IfS5qz784mR5KhTU-49zseOcoGTsAxaVs93bHOT1GQOgpSTfXgUTVkEoa0WE1TgdZCxRebrNozhd6M6UvSL0fnJVzmV-pP7P8PmJ-K-C82ANM9EqJH9dSzhViChiqug0V-Ieov2aGMKFV2qnqieSjNs4-qmMrUQb5cf92etyT1HdRpSi6eP6uyBLG35Es7UOryelhfRavXypIrBdAXRZtjDBcmflKomTbQWozRCl2YiAdNxegQZ33sfpA3RuqK1EnMQaHaZEhJ937nr2Yed_8LMQaPZ44Id2106h4QonLrz0enmjhyJYFOQW_iARvSgTotdQyhVm2HYuRoaGLetlf5xEEZX-eWtch6qk7RiAyhg.NCZ8Utdk0hFvu8ZZW8rHsA",
//   "user": {
//     "id": 490,
//     "customer_id": "4f753a3c-3c9b-11e6-986a-2b0947950245",
//     "email": "sara+062702@opsee.co",
//     "verified": false,
//     "admin": false,
//     "active": true,
//     "created_at": 1467054843204,
//     "updated_at": 1467054843204,
//     "status": "active",
//     "has_password": false,
//     "perms": {
//       "admin": true,
//       "edit": true,
//       "billing": true
//     }
//   }
// });

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