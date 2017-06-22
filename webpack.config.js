const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'app', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-class-properties', 'transform-decorators-legacy'],
          presets: ['react', 'flow', 'es2015'],
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[hash].[ext]',
        },
        include: [
          path.resolve(__dirname, './app/assets/images/game'),
        ],
      },
      {
        test: /\.(png|jpg|gif|ttf|woff|woff2|)$/,
        loader: 'url-loader?limit=200000',
        exclude: [
          path.resolve(__dirname, './app/assets/images/game'),
        ],
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'app',
      'node_modules',
    ],
  },
};
