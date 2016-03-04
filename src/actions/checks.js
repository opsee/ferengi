import { CHECK_URL } from './constants';
import * as catfish from '../modules/catfish';

/**
 * @param {string} url
 */
export function checkURL(url) {
  return dispatch => {
    dispatch({
      type: CHECK_URL,
      payload: catfish.check(url)
    });
  };
}