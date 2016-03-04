import request from './request';
import URL from 'url';

export function getToken() {
  return request
    .post('https://catfish.opsee.com/token')
    .then(res => {
      return res.body.token;
    });
}

export function makeRequest(url) {
  const parsedURL = URL.parse(url);
  return {
    check: {
      target: {
        address: parsedURL.hostname,
      },
      http_check: {
        path: parsedURL.path,
        protocol: parsedURL.protocol.slice(0, -1), // FIXME gross
        port: parseInt(parsedURL.port),
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
    return request
      .post('https://catfish.opsee.com/check')
      .set('Authorization', `Bearer ${token}`)
      .send(requestData)
      .then(res => {
        if (res.error) {
          return console.error(res.error);
        }
        const responses = res.body.responses;
        return { data: { token, responses } };
      });
  });
}