import _ from 'lodash';

import * as catfish from '../modules/catfish';
import { trackEvent } from '../modules/analytics';
import fetch from '../modules/fetch';
import yeller from '../modules/yeller';

import {
  ONBOARD,
  ONBOARD_SIGNUP
} from '../constants/analyticsConstants';

import {
  CHECK_URL,
  SET_URL,
  SIGNUP
} from './constants';

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

          // Track successful signups only
          trackEvent(ONBOARD, ONBOARD_SIGNUP, data);

          return res.json();
        })
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