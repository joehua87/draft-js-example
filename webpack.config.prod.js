const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const CleanPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const assetsPath = path.resolve(process.cwd(), 'static')

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new CleanPlugin([assetsPath], { root: process.cwd() }),
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      }
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: [
          __dirname,
          /packages\/.*?\/src/,
        ],
      },
      {
        test: /\.css?$/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css?$/,
        loaders: [
          'style-loader',
          'css-loader',
        ],
        include: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json',
      }
    ]
  },
  postcss: [autoprefixer({ browsers: ['> 1%'] })],
}
