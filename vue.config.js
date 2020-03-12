const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/resume/'
    : '/',
  chainWebpack(config) {
    config.plugin('CompressionPlugin').use(CompressionPlugin);
  },
};
