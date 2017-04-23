var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    index_components: './components/index_components.js'
  },
  output: {
    path: 'components/bundles',
    filename: '[name]_bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.less$/,
        loader : 'style!css!less'
      },
      {
        test : /\.html$/,
        loader : 'raw!html-minify'
      }
    ]
  }
}
