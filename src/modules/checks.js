import _ from 'lodash';
import URL from 'url';

/**
 * Example usage:
 *
 *    const check = makeCheck('https://try.opsee.com', 'example@opsee.com', [
 *      { key: 'code', relationship: 'equal', operand: '200' }
 *    ]);
 *
 * @params {string} url - the URL for the health check
 * @params {string} email - the user's sign-up email address, for creating an email notification
 * @params {object[]} assertions - an array of objects, where each object is
 *    an assertion of the form { key, relationship, operand }
 *
 * @returns {object} a check schema for compost
 */
export function makeCheck(url, email, assertions) {
  const parsedURL = URL.parse(url);
  const protocol = _.get(parsedURL, 'protocol', '').replace(/\:$/, ''); // lib returns protocol as e.g. "https:"
  const port = parsedURL.port || (protocol === 'https' ? 443 : 80);

  const formattedAssertions = _.filter(assertions, assertion => {
    return assertion.key && assertion.operand && assertion.relationship;
  });

  const check = {
    'target': {
      'id': _.get(parsedURL, 'host'),
      'type': 'external_host'
    },
    'http_check': {
      'headers': [], // Headers always empty from Ferengi
      'path': _.get(parsedURL, 'pathname', '/'),
      'port': port,
      'protocol': protocol,
      'verb': 'GET' // Always GET from Ferengi
    },
    'name': `Http ${_.get(parsedURL, 'hostname', url)}`,
    'notifications': [{
      type: 'email',
      value: email
    }],
    assertions: formattedAssertions
  };
  return check;
}