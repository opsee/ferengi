const webpack = require('webpack');
const baseConfig = require('./common.config.js');
const merge = require('webpack-merge');
const compression = require('compression-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const sitemap =  require('sitemap-webpack-plugin');

const PATHS = [
  '/', '/about', '/how', '/features', '/beta-tos',
  '/try', '/try/aws', '/try/checks', '/try/dev', '/try/icinga', '/try/microservices',
  '/try/nagios', '/try/sensu', '/try/ux',
];

var plugins = [
  new StaticSiteGeneratorPlugin('bundle.js', PATHS, {}),
  new sitemap('https://opsee.com', PATHS, 'sitemap.xml'),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  }),
]

if (process.env.NODE_ENV === 'production'){
  plugins = plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      compress: {
        warnings: false
      }
    }),
    new compression({
      algorithm: 'gzip'
    })
  ]);
}

module.exports = merge(baseConfig, {
  plugins
});