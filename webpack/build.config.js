const baseConfig = require('./common.config.js');
const merge = require('webpack-merge');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const PATHS = [
  '/', '/about', '/how', '/features'
];

module.exports = merge(baseConfig, {
  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', PATHS, {})
  ]
});