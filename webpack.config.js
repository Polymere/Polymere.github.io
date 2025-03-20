const path = require('path');

module.exports = {
  entry: './assets/js/src/rerun.js',
  output: {
    filename: 'rerun-bundle.js',
    path: path.resolve(__dirname, 'assets/js/dist'),
  }
};