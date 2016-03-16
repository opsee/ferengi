const webpack = require('webpack');
const baseConfig = require('./common.config.js');
const merge = require('webpack-merge');
const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;

module.exports = merge(baseConfig, {
  plugins: [
    new HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
});