const webpack = require('webpack');
const baseConfig = require('./common.config.js');
const merge = require('webpack-merge');
const compression = require('compression-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const PATHS = [
  '/', '/about', '/how', '/features'
];

module.exports = merge(baseConfig, {
  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', PATHS, {}),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      compress: {
        warnings: false
      }
    }),
    new compression({
      algorithm: 'gzip'
    })
  ]
});