const webpack = require('webpack')
const webpackConfig = require('./webpack.base')

webpackConfig.entry.unshift('webpack-hot-middleware/client?reload=true&path=../__webpack_hmr')

webpackConfig.mode = 'development'

webpackConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin()
)

module.exports = webpackConfig