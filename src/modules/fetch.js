let fetch = undefined;
if (typeof window !== 'undefined'){
  fetch = window.fetch || require('whatwg-fetch');
}

export default fetch;