let obj = undefined;
if (typeof window !== 'undefined'){
  require('whatwg-fetch');
  obj = window.fetch;
}

export default obj;