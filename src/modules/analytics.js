import fetch from './fetch';
import ga from './ga';

/**
 * @params {string} category
 * @params {string} action
 * @params {object} data
 */
export function trackEvent(category, action = '', data = {}, user = {}) {
  const stringData = typeof data === 'string' ? data : JSON.stringify(data);

  // Google Analytics
  ga('send', 'event', category, action, stringData);

  // Myst (Intercom)
  return fetch('https://myst.opsee.com/event', {
    method: 'post',
    body: JSON.stringify({ category, action, data, user }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => {
    if (!res.ok){
      return res.json().then(json => {
        throw new Error(json.message);
      });
    }
  });
}