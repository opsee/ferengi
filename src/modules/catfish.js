import fetch from './fetch';

export function getToken() {
  return fetch('https://catfish.opsee.com/token', {
    method: 'post'
  })
  .then(res => res.json())
  .then(json => json.token);
}

export function makeRequest(string) {
  let url = string;
  if (!url.match('^http')){
    url = `http://${url}`;
  }

  if (typeof window !== 'undefined'){
    try {
      const parsedURL = new window.URL(string);
      let protocol = parsedURL.protocol || '';
      protocol = protocol.replace(':', '');
      return {
        check: {
          target: {
            address: parsedURL.hostname
          },
          http_check: {
            path: parsedURL.pathname || '/',
            protocol,
            port: parseInt(parsedURL.port, 10) || (protocol === 'https' ? 443 : 80),
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
    .then(res => {
      // window.fetch will only trigger .catch() on network failures
      // @see https://github.com/github/fetch#caveats
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      return res.json();
    })
    .then(json => {
      if (json.error) {
        throw new Error(json.error);
      }

      const responses = json.responses;
      return { data: { token, responses } };
    });
  });
}