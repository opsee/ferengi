/* eslint-disable */
import _ from 'lodash';
import cookie from 'cookie';

import { SIGNUP } from './constants';
import { trackEvent } from '../modules/analytics';
import { ONBOARD, ONBOARD_SIGNUP } from '../constants/analyticsConstants';
import fetch from '../modules/fetch';
import yeller from '../modules/yeller';

function setCookie(token) {
  // TODO uncomment this to actually set token. This is blocked by the check
  // that gets created actually getting created. Currently, the check that's returned
  // is just mock data, the ID of which belongs to the sara@opsee.co account.
  //
  // document.cookie = cookie.serialize('token', token, {
  //   // domain: 'opsee.com', // explicitly set domain so it works on app.opsee.com
  //   domain: 'localhost',
  //   maxAge: 3600 // seconds (6 hours)
  // });
}

function doSignup(data = {}) {
  return Promise.resolve({"intercom_hmac":"bf471da9f3e5ce6d291c49a1e51e8b8de570498e1f7227bf48b732fa1c490967","token":"eyJhbGciOiJBMTI4R0NNS1ciLCJlbmMiOiJBMTI4R0NNIiwiaXYiOiJzejRlUGhhTnRCVk1PRzdVIiwidGFnIjoiS3FHamdfUVkybm1lRzFENUZTczUydyJ9.6t3R7w531I0jTthkSUXkSw.tb5-D2R4kiR8BVjL.Jcatcn7R3SWQFMuajmExPADMbg2JBWN-921Mf-WUWEjOvIOd2WIk_Rifn1BJzOzpR3fb1Jnz3DfTLnHZzZSx7qTHeIdpYOKMvG1i2pOicmskO-5HRraDRGe6Jh3rFA4MhYZaVn7vkFixTyhLLC0KZdy-M-KFnZbNejMa5dFfD4kJXvKwjiUh_10pG9KSf58tsXOONCeV3USrNRoGRcxrd62sgaAGXR1SD4LgdqD6vH9LwU5bahSppTU2sbHMY3S621EOIkjxXSHMnhoKkuDZzQf9U9vWFBcQaQZ-SYc0E1PMqtgOsoRSPy44KvtcZAArNWAwPjs9CXBBnfNYQIM6agYDrK0d9v9QoiI.WQor5ei2-D28zbWwRSJdQg","user":{"id":310,"customer_id":"4a9dad90-281a-11e6-ba24-2fbabd57b5f6","email":"sara+local11@opsee.co","name":"sara+local11@opsee.co","active":true,"created_at":1464800406747,"updated_at":1464800406747,"status":"active","perms":[]}});
  // return new Promise((resolve, reject) => {
  //   fetch('https://auth.opsee.com/signups/activate', {
  //     method: 'post',
  //     body: JSON.stringify(_.pick(data, ['email', 'referrer', 'name']))
  //   })
  //   .then(res => {
  //     if (!res.ok){
  //       return res.json().then(json => {
  //         throw new Error(json.message);
  //       }).catch(reject);
  //     }

  //     // Track successful signups only
  //     trackEvent(ONBOARD, ONBOARD_SIGNUP, data);

  //     return res.json();
  //   })
  //   .then(resolve)
  //   .catch(err => {
  //     yeller.report(err);
  //     reject(err);
  //   });
  // });
}

function makeCheck(userData, data) {
  console.log(userData, data);
  const {user} = userData;
  const {url, assertions} = data;
  return {
    'target': {
      'id': url,
      'type':"host"
    },
    'http_check':{
      'headers':[],
      'path':"/",
      'port':443,
      'protocol':"https",
      'verb':"GET"
    },
    'name': `Http ${url}`,
    'notifications': [{
      type: 'email',
      value: user.email
    }],
    assertions
  };
}

function createCheck(userData, data) {
  const check = makeCheck(userData, data);
  const checks = [check];
  console.log('creating check', check);
  return Promise.resolve({"data":{"checks":[{"id":"4OtWaPaYonqmddseynHdTh"}]}});

  // return new Promise((resolve, reject) => {
  //   fetch('https://api.opsee.com/graphql', {
  //     method: 'post',
  //     headers: {
  //       'Authorization': `Bearer ${userData.token}`
  //     },
  //     body: JSON.stringify({
  //       query: `
  //         mutation Mutation ($checks: [Check]){
  //           checks(checks: $checks) {
  //             id
  //           }
  //         }
  //       `,
  //       variables: { checks }
  //     })
  //   })
  //   .then(res => {
  //     // ????
  //     //     if (!res.ok){
  //     //       return res.json().then(json => {
  //     //         throw new Error(json.message);
  //     //       }).catch(reject);
  //     //     }

  //     //     // Track successful signups only
  //     //     trackEvent(ONBOARD, ONBOARD_SIGNUP, data);

  //     //     ret
  //   })
  //   .catch(err => {
  //     yeller.report(err);
  //     reject(err);
  //   })
  // });
}

/**
 * @param {object} data
 * @param {string} data.name
 * @param {string} data.email
 * @param {string} data.referrer
 */
export function signup(data) {
  return dispatch => {
    doSignup(data)
      .then(userData => {
        setCookie(userData.token);
        dispatch({
          type: SIGNUP,
          payload: userData
        });
        return createCheck(userData, data);
      })
      .then(checkResponse => {
        const checkID = _.chain(checkResponse).get('data.checks').first().get('id').value();
        window.open(`http://localhost:8080/activated?id=${checkID}`);
      });
  };
}

