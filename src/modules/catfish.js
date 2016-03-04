import request from './request';

export function getToken() {
  return request
    .post('https://catfish.opsee.com/token')
    .then(res => {
      return res.body.token;
    });
}

export function makeRequest(url) {
  return {
    "max_hosts": 1,
    "check": {
      "id": "www.reddit.com",
      "interval": 0,
      "target": {
        "name": "www.reddit.com",
        "type": "url",
        "id": "www.reddit.com",
        "address": "www.reddit.com"
      },
      "name": "www.reddit.com",
      "http_check": {
        "name": "",
        "path": "/r/pepe",
        "protocol": "https",
        "port": 443,
        "verb": "GET",
        "body": ""
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