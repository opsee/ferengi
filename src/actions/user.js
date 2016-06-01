/* eslint-disable */
import _ from 'lodash';
import cookie from 'cookie';

import { SIGNUP } from './constants';
import { trackEvent } from '../modules/analytics';
import { ONBOARD, ONBOARD_SIGNUP } from '../constants/analyticsConstants';
import fetch from '../modules/fetch';
import yeller from '../modules/yeller';

function setCookie(token) {
  document.cookie = cookie.serialize('token', token, {
    // domain: 'opsee.com', // explicitly set domain so it works on app.opsee.com
    domain: 'localhost',
    maxAge: 3600 // seconds (6 hours)
  });
}

function doSignup(data = {}) {
  return Promise.resolve({
    "intercom_hmac": "3d3313f0a210a31d9d623fa474934920968e5b746bad577461f7e4102ff52a9c",
    "token": "eyJhbGciOiJBMTI4R0NNS1ciLCJlbmMiOiJBMTI4R0NNIiwiaXYiOiJUNTNsXzJaZzgyM2pSX3NtIiwidGFnIjoiRzB5d21SVXRCVnZ0MWhpRXBBbUhKUSJ9.UgyKUUFcEkDp20NTKkOVJg.DvSVPVDS3Li25PTi.6xaxHuXcvsEPZXbMV3kCCJc96J80EOR-NeOTKpW5HO_318LnUkILsjAe7xnPJs2nAq1msqId2Fh2704FksulORv3KBnszsdMrFECjCo-JULFI8Y0KxtcEPY6iiz7GWjZpRHGTzo0wkLGps7o458Ig61eVeD5SAh-5q1X8s6u9qT3sbOdJvNgpfkowAp-y91d8TNPyxR-H1KGiJMWh5Or7zM4-d84l0TR4H-14RuzCb1BJYOfTqvkRZ2qFGiw4gXhqH1BWZtam5s-cvoLEavMLYW4sqfCdSSzOPV0295U4aEU1lba7R2JEUBSPXek7hls9j0NBJD5RR6sOAKYn27osp_zFoO7-So.PE5691FViVNVCyWSBOTnOA",
    "user": {
      "id": 308,
      "customer_id": "2eb2a1de-2807-11e6-ba22-df5a1e83050b",
      "email": "sara+local9@opsee.co",
      "name": "sara+local9@opsee.co",
      "active": true,
      "created_at": 1464792199470,
      "updated_at": 1464792199470,
      "status": "active",
      "perms": []
    }
  });
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
        window.open(`http://localhost:8080/start/review-check?id=${checkID}`);
      });
  };
}

