const config = require('config');
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const webpackConfig = require('./webpack/dev.config');

const server = new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  historyApiFallback: true,
  contentBase: path.resolve(__dirname, './dist'),
  inline: true,
  stats: {
    colors: true,
    chunkModules: false,
    chunks: false,
    assets: false,
    hash: false,
    version: false
  }
});

server.listen(config.get('server.port'), config.get('server.host'), err => {
  if (err) {
    console.log(err);
  }
  console.log(`Listening at ${config.get('server.host')}:${config.get('server.port')}`);
});