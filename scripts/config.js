const path = require('path')

module.exports = {
  devServerHost: 'localhost',
  devServerPort: 3000,
  libPath: path.resolve(__dirname, '../lib/'),
  buildPath: path.resolve(__dirname, '../build/'),
  staticPath: path.resolve(__dirname, '../static')
}