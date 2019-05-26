module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/public/js'
  },
  devServer: {
    contentBase: __dirname + '/public',
    watchContentBase: true,
    port: 8080,
    publicPath: '/js/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader'
        }
      ]
    }]
  }
};