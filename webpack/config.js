const path = require('path');

module.exports = {
  entry: {
    'content-script': './src/js/content-script',
    background: './src/js/background',
    options: './src/js/options'
  },
  output: {
    filename: './js/[name].js'
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules']
  },
  module: {
    rules: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.resolve(__dirname, '../src/js')
    }]
  }
};
