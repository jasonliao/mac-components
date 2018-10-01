const chalk = require('chalk')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackHotMiddleware = require('webpack-hot-middleware')

const webpackConfig = require('../webpack/webpack.config.dev')
const config = require('./config')
const compiler = webpack(webpackConfig)

const devServer = new WebpackDevServer(compiler, {
  publicPath: '/build/lib/',
  hot: true,
  watchOptions: {
    ignored: [/node_modules/, /\.min\.js/]
  },
  before: function(app) {
    app.use(webpackHotMiddleware(compiler))
  }
})

devServer.listen(config.devServerPort, config.devServerHost, err => {
  if (err) {
    console.log(err)
  }
  console.log(chalk.cyan(`Starting the development server on http://${config.devServerHost}:${config.devServerPort}\n`))
});