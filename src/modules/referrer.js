import _ from 'lodash';
import {parse} from 'query-string';
import * as storage from './storage';

export function getReferrer() {
  if (typeof window !== 'undefined'){
    const href = window.location.href;
    const query = parse(window.location.search);
    const {referrer} = query;
    let trumps = ['/summit'].map(str => !!href.match(str));
    const card = _.some(trumps) ? href : null;
    return referrer || window.document.referrer || card || storage.getItem('referrer') || `(none) ${href}`;
  }
  return '';
}

export function setReferrer(str) {
  if (typeof window !== 'undefined'){
    const referrer = str || getReferrer();
    storage.setItem('referrer', referrer);
  }
}