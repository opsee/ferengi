import _ from 'lodash';
import * as storage from './storage';

export function getReferrer(location = {}) {
  let referrer = _.get(location, 'query.referrer');
  return referrer || storage.getItem('referrer');
}

export function setReferrer(location) {
  if (typeof window !== 'undefined'){
    const referrer = getReferrer(location) || document.referrer;
    storage.setItem('referrer', referrer);
  }
}