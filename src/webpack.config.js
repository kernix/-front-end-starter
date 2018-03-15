const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    'main': "./sass/main"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
          {
            loader: 'css-loader',
            options: {
                url: false,
                minimize: true,
                sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
                sourceMap: true
            }
          }
        ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename:  (getPath) => {
        return getPath('css/[name].min.css').replace('css/js', 'css');
      },
      allChunks: true
    })
  ]
};
