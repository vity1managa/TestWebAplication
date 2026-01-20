const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/server.ts',
  target: 'node', // Since we're building for Node.js
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/', to: 'public/' }, // Copy public assets
        { from: 'static/', to: 'static/' }, // Copy static files
        { from: 'assets/', to: 'assets/' }, // Copy asset files
      ],
    }),
  ],
};