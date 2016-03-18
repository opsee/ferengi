/**
 * WELCOME TO THE FERENGI WEBPACK ZONE. LET ME BE YOUR GUIDE.
 *
 * @see http://jxnblk.com/writing/posts/static-site-generation-with-react-and-webpack/
 */
const webpack = require('webpack');
const _ = require('lodash');
const config = require('config');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const seedling = require('seedling');

const CONTEXT_DIR = path.resolve(__dirname, '..', 'src');
const NODE_MODULES_DIR = path.resolve(__dirname, '..', 'node_modules');
const EMISSARY_DIR = path.join(NODE_MODULES_DIR, 'emissary');
const INCLUDE_DIRS = [CONTEXT_DIR, EMISSARY_DIR];

var definePlugin = new webpack.DefinePlugin({
  'FormData': JSON.stringify(null)
});

module.exports = {
  entry: {
    app: [
     './src/entry.js'
    ]
  },
  output: {
    filename: 'bundle.js',
    path: 'dist',

   /*
    * Must compile to UMD or CommonJS so it can be required in a Node context
    * @see https://github.com/markdalgleish/static-site-generator-webpack-plugin#webpackconfigjs
    */
    libraryTarget: 'umd'
  },

  module: {
    preLoaders:[
      {
        test: /\.js$|\.jsx$/,
        loaders: ['eslint-loader'],
        include: INCLUDE_DIRS
      },
    ],
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
        // include: INCLUDE_DIRS
      },
      {
        test: /\.js$|\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        include: INCLUDE_DIRS
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules&importLoaders=1&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
        ),
        include: INCLUDE_DIRS
      }, {
        test: /\.(png|jpg|svg|gif|ttf|eot|svg|ico|woff(2)?)$/,
        loader: 'url-loader?limit=8192',
        include: INCLUDE_DIRS
      }
    ]
  },

  plugins: [
    // Make webpack return a non-zero exit code when build fails
    require('webpack-fail-plugin'),
    definePlugin,
    new ExtractTextPlugin('style.css', {
        allChunks: true
    }),
  ],

  resolve: {
    extensions: ['', '.jsx', '.js', '.json', '.svg', '.png', '.jpg'],
    modulesDirectories: [NODE_MODULES_DIR]
  },

  postcss(wp) {
    const styleConstants = require(`${CONTEXT_DIR}/constants/styleConstants`);

    return [
      require('postcss-import')({
        addDependencyTo: wp
      }),
      require('postcss-cssnext')({
        browsers: 'last 1 version, > 10%',
        features: {
          customProperties: {
            variables: _.assign({}, seedling.flat, styleConstants.flat)
          }
        }
      }),
      require('postcss-url')()
    ];
  }
};