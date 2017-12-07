const resolve = require('path').resolve;
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/javascripts/index.js',
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: './dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [ 'css-loader', 'sass-loader' ],
          publicPath: ''
        })
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        use: [ { loader: 'url-loader', options: { limit: 4000 } }, 'image-webpack-loader' ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
    }),
    new ExtractTextPlugin('style.css')
  ]
};

module.exports = config;
