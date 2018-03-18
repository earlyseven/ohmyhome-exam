const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },
  module: {
  	rules: [
  		{
  			test: /\.js$/,
  			exclude: {
          test: path.resolve(__dirname, "node_modules")
        },
        include: path.resolve(__dirname, "src"),
  			loader: "babel-loader"
  		},
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          }, 
          {
            loader: "css-loader" // translates CSS into CommonJS
          }, 
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
  	]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};