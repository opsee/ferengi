import _ from 'lodash';
import * as storage from './storage';

export default (location) => {
  let ref = _.get(location, 'query.referrer');
  return ref || storage.getItem('referrer');
};