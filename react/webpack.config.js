const path = require('path');

module.exports = {
  entry: './playground/src/app.js',
  output: {
    path: path.join(__dirname, 'playground', 'public'),
    filename: 'bundle.js'
  }
}