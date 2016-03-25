import ga from './ga';

/**
 * @params {string} category
 * @params {string} action
 * @params {object} data
 */
export function trackEvent(category, action = '', data = {}) {
  const stringData = typeof data === 'string' ? data : JSON.stringify(data);
  ga('send', 'event', category, action, stringData);
}