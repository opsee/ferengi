const Yeller = typeof window !== 'undefined' ? window.Yeller : {};

const yeller = {
  report(...args){
    if (typeof Yeller === 'function'){
      return Yeller.report(...args);
    }
    return null;
  },
  reportAction(state, action = {payload: {}}){
    const payload = action.payload || {};
    yeller.report(new Error(payload.message), {
      location: action.type,
      url: payload.url,
      custom_data: {
        method: payload.method
      }
    });
    return state;
  },
  configure(){
    if (typeof Yeller === 'function'){
      Yeller.configure({
        token: 'yk_w_438e9576809dc7e9e7cca1f9b8d36b42d46fff9b631a62c6ab6febbaf0facc2a',
        environment: process.env.NODE_ENV === 'production' ? 'production' : 'development'
      });
    }
  }
};

export default yeller;