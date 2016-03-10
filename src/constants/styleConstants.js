const constants = {
  color: {
    accent: '#5D89FB',
    neutral1: '#FFFFFF',
    neutral2: '#FEFAF3',
    warm1: '#EB9450',
    warm2: '#E87B4F',
    warm3: '#DE6752',
    warm4: '#D65F54'
  }
};

function flatten(obj){
  const data = {};
  Object.keys(obj).forEach(key => {
    var parent = obj[key];
    var childKeys = Object.keys(parent);
    childKeys.forEach(ck => {
      var capitalized = ck.charAt(0).toUpperCase() + ck.slice(1);
      data[key + capitalized] = parent[ck];
    });
  });
  return data;
}

module.exports = {
  flat: flatten(constants),
  plain: constants
};