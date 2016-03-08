const baseConfig = require('./common.config.js');
const merge = require('webpack-merge');
const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;

module.exports = merge(baseConfig, {
  plugins: [
    new HotModuleReplacementPlugin()
  ]
});