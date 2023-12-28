const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: process.env.NODE_ENV,
    entry: './client/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'build.js'
    },
    module: {
        rules: [
          {
            test: /.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            },
          },
          {
            test: /.(css|scss)$/,
            exclude: /node_modules/,
            use: [{
              loader:'style-loader'
            }, 
            {
              loader:'css-loader'
            },],
          }
        ],
      },
      plugins: [
        new HTMLWebpackPlugin({
            template: './client/index.html'
        })
    ],
      devServer: {
        static: {
          publicPath :'/build',
          directory:  path.resolve(__dirname, 'build'),
        },
        open: true,
        proxy: {
          '/': 'http://localhost:3000',
        },
      },
}