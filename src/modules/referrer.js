import _ from 'lodash';
import * as storage from './storage';

export function getReferrer(location = {}) {
  let referrer = _.get(location, 'query.referrer');
  let fallback = '';
  if (typeof window !== 'undefined'){
    fallback = document.referrer || `(none) ${window.location.href}`;
  }
  return referrer || storage.getItem('referrer') || fallback;
}

export function setReferrer(location) {
  if (typeof window !== 'undefined'){
    const referrer = getReferrer(location);
    storage.setItem('referrer', referrer);
  }
}