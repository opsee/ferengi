import _ from 'lodash';
import URL from 'url';

export function isDefaultCheck(url, assertions) {
  return url === 'https://try.opsee.com' &&
    assertions.length === 1 &&
    _.isEqual(assertions[0], {key: 'code', relationship: 'equal', operand: '200'});
}

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
  let fullURL = url;
  if (!fullURL.match('^http')){
    fullURL = `http://${fullURL}`;
  }

  const parsedURL = URL.parse(fullURL);
  const protocol = _.get(parsedURL, 'protocol', '').replace(/\:$/, ''); // lib returns protocol as e.g. "https:"
  const port = parsedURL.port || (protocol === 'https' ? 443 : 80);

  const formattedAssertions = _.filter(assertions, assertion => {
    return assertion.key && assertion.relationship; // FIXME better logic
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
    'name': `Http ${_.get(parsedURL, 'hostname', fullURL)}`,
    'notifications': [{
      type: 'email',
      value: email
    }],
    assertions: formattedAssertions
  };

  return check;
}