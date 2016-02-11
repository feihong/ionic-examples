var path = require('path');
var webpack = require('webpack');


module.exports = {
  entry: [
    './src/app.js'
  ],

  output: {
    path: __dirname + '/www',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        include: [
            path.resolve(__dirname, 'src')
        ],
        exclude: /node_modules/,
        loaders: ['ng-annotate', 'babel-loader']
      }
    ]
  },
  resolve: {
    root: [
        path.join(__dirname, 'node_modules')
    ],
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
          warnings: false
      }
    })
  ]
};
