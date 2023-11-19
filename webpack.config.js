// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './src/index.js', 
//   devtool: 'source-map',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'), 
//   },
  
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: 'index.html', 
//       filename: 'index.html', 
//     }),
//   ],
// };


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/index.js', './src/styles/style.css'], 
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), 
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html', 
      filename: 'index.html', 
    }),
  ],
};
