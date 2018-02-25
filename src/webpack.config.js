const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    main: './sass/main.js',
    // js: './js/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.css'
  },
  module: {
      rules: [{
          test: /\.scss$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer],
            },
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }]
      }]
  }
};
