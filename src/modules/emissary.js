import cookie from 'cookie';

export function setUser(userData) {
  // explicitly set domain so it works in Emissary as well
  // See: https://tools.ietf.org/html/rfc2109
  const cookieData = JSON.stringify({
    token: userData.token,
    id: _.get(userData, 'user.id'),
    email: _.get(userData, 'user.email')
  });
  const opts = {
    domain: process.env.NODE_ENV === 'development' ? 'localhost' : 'opsee.com',
    maxAge: 3600 // seconds (1 hour)
  };
  document.cookie = cookie.serialize('ferengi', cookieData, opts);
}

export function redirectToEmissary() {
  // FIXME better config management. As-is, webpack will strip out
  // the process.env stuff and replace the line with just a string
  // (e.g., const location = 'production') but it looks messy!
  let location;
  if (process.env.NODE_ENV === 'development') {
    // We can't redirect to staging/production emissary from localhost since the
    // domains are different; to do so, you'll want to modify your /etc/hosts file
    location = 'http://localhost:8080/welcome';
  } else {
    location = 'https://app.opsee.com/welcome';
  }
  window.location = location;
}