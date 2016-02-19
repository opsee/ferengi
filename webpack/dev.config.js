/**
 * WELCOME TO THE FERENGI WEBPACK ZONE. LET ME BE YOUR GUIDE.
 *
 * @see http://jxnblk.com/writing/posts/static-site-generation-with-react-and-webpack/
 */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const CONTEXT_DIR = path.resolve(__dirname, '..', 'src');
const NODE_MODULES_DIR = path.resolve(__dirname, '..', 'node_modules');

console.log(CONTEXT_DIR);

const PATHS = [
  '/'
];

module.exports = {
  entry: './src/entry.js',

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
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$|\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        include: [CONTEXT_DIR]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader'),
        include: [CONTEXT_DIR]
      }

    ]
  },

  plugins: [

    new ExtractTextPlugin('style.css', {
        allChunks: true
    }),
    /*
     * Provide a series of paths to be rendered, and a matching set of index.html
     * files will be rendered in your output directory by executing your own
     * custom, webpack-compiled render function defined in the entry file.
     */
    new StaticSiteGeneratorPlugin('bundle.js', PATHS, {})
  ],

  resolve: {
    extensions: ['', '.jsx', '.js', '.json', '.svg', '.png', '.jpg'],
    modulesDirectories: [NODE_MODULES_DIR]
  },

  postcss() {
    return [
      /**
       * Adds in support for CSS modules: local scoping for CSS
       * @see https://github.com/outpunk/postcss-modules
       */
      require('postcss-modules')
    ];
  }
};