const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src', 'index.tsx'),
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, '../wwwroot'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-typescript', '@babel/preset-react']
        },
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts'],
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './index.html'
    }), 
    new CleanWebpackPlugin({})
  ]
};