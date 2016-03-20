/* This needs to worth for both es6 and vanilla Node */
/* eslint-disable no-var */
const constants = {
  color: {
    accent: '#5D89FB',
    neutral1: '#FFFFFF',
    neutral2: '#FEFAF3',
    warm0: '#F2B542',
    warm1: '#EB9450',
    warm2: '#E87B4F',
    warm3: '#DE6752',
    warm4: '#D65F54',
    danger: '#DE6752',
    codeBody: 'rgb(203, 203, 203)',
    codeAccent: 'rgb(93, 176, 115)',
    codeHeader: '#5D89FB',
    codeBg: 'rgb(25, 25, 25)',
    codeBgHover: 'rgb(24, 40, 80)'
  },

  font: {
    display: '"Geogrotesque-Regular", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
    main: '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif'
  },

  layout: {
    maxWidth: '1000px',
    headerWidth: '1600px;'
  },

  breakpoint: {
    small: '768px'
  }
};

function flatten(obj){
  const data = {};
  Object.keys(obj).forEach(key => {
    const parent = obj[key];
    const childKeys = Object.keys(parent);
    childKeys.forEach(ck => {
      const capitalized = ck.charAt(0).toUpperCase() + ck.slice(1);
      data[key + capitalized] = parent[ck];
    });
  });
  return data;
}
/* eslint-enable no-var */

module.exports = {
  flat: flatten(constants),
  plain: constants
};
