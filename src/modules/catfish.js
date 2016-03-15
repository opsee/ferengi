import URL from 'url';
import fetch from './fetch';

export function getToken() {
  return fetch('https://catfish.opsee.com/token', {
    method: 'post'
  })
  .then(res => res.json())
  .then(json => json.token);
}

export function makeRequest(url) {
  const parsedURL = URL.parse(url);
  const protocol = parsedURL.protocol.slice(0, -1);
  return {
    check: {
      target: {
        address: parsedURL.hostname
      },
      http_check: {
        path: parsedURL.path,
        protocol,
        port: parseInt(parsedURL.port, 10) || (protocol === 'https' ? 443 : 80),
        name: '',
        body: '',
        verb: 'GET'
      }
    }
  };
}

// TODO don't need to get the token every time
export function check(url) {
  const requestData = makeRequest(url);

  return getToken().then(token => {
    return fetch('https://catfish.opsee.com/check', {
      method: 'post',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(requestData)
    })
    .then(res => res.json())
    .then(json => {
      if (json.error) {
        return console.error(json.error);
      }
      const responses = json.responses;
      return { data: { token, responses } };
    });
  });
}