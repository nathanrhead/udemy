module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],  // Allow Webpack to resolve .jsx files automatically
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,  // This matches both .js and .jsx files.  
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};