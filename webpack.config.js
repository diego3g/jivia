module.exports = {
  entry: './app/index.js',
  output:{
    filename: './public/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-decorators-legacy'],
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif|)$/,
        loader: 'url-loader?limit=200000'
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  }
}
