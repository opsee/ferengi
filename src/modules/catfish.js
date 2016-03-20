import fetch from './fetch';

export function getToken() {
  return fetch('https://catfish.opsee.com/token', {
    method: 'post'
  })
  .then(res => res.json())
  .then(json => json.token);
}

export function makeRequest(string) {
  if (typeof window !== 'undefined'){
    try {
      const url = new window.URL(string);
      let protocol = url.protocol || '';
      protocol = protocol.replace(':', '');
      return {
        check: {
          target: {
            address: url.hostname
          },
          http_check: {
            path: url.pathname || '/',
            protocol,
            port: parseInt(url.port, 10) || (protocol === 'https' ? 443 : 80),
            name: '',
            body: '',
            verb: 'GET'
          }
        }
      };
    } catch (err) {
      return err;
    }
  }
  return false;
}

// TODO don't need to get the token every time
export function check(url) {
  const requestData = makeRequest(url);
  if (requestData instanceof Error){
    return Promise.reject(requestData);
  }

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