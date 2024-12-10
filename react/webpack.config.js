const path = require('path');

module.exports = {
  entry: './indecision-app/src/app.js',
  output: {
    path: path.join(__dirname, 'indecision-app', 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Allow Webpack to resolve .jsx files automatically
  },
  module: {
    rules: [{
      test: /\.jsx?$/,  // This matches both .js and .jsx files.  
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      }
    },
    {
      test: /\.s?css$/, // This matches both .css and .scss files.
      use: [ // Loaders are applied from right to left.
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  mode: 'development', // or 'production'
  devtool: 'cheap-source-map', // or 'source-map'
  devServer: {
    static: path.join(__dirname, 'indecision-app', 'public'),  // Where your static files are served from
    compress: true,  // Enable gzip compression
    port: 9000,  // Port to run the server on
    open: {
      target: 'index.html',
      app: {
        name: 'Google Chrome',
      }
    },
    hot: true  // Enable hot module replacement (HMR)
  }
}