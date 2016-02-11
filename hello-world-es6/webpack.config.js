var path = require('path');
var webpack = require('webpack');


module.exports = {
    watch: true,

    eslint: {
        configFile: '.eslintrc'
    },

    entry: [
        './src/app.js'
    ],

    output: {
        path: __dirname + '/www',
        filename: 'bundle.js'
    },

    // use inline source maps.
    devtool: 'cheap-module-source-map',

    module: {
        loaders: [
          {
            test: /\.js?$/,
            include: [
                path.resolve(__dirname, 'src')
            ],
            exclude: /node_modules/,
            loaders: ['ng-annotate', 'babel-loader']
          },
          {
            test: /\.js$/,
            include: [
                path.resolve(__dirname, 'src')
            ],
            loader: 'eslint-loader',
            exclude: /node_modules/
          }
        ]
    },
    resolve: {
        root: [
            path.join(__dirname, 'node_modules')
        ],
        extensions: ['', '.js']
    }
};
