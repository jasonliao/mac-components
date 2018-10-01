const path = require('path')

module.exports = {
  entry: [path.resolve(__dirname, '../lib/index.tsx')],
  output: {
    path: path.resolve(__dirname, '../build/lib/'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [{
      test: /\.js/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      loader: 'awesome-typescript-loader'
    }, {
      test: /\.s[a|c]ss/,
      exclude: /node_modules/,
      loader: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },
  plugins: [ ]
}