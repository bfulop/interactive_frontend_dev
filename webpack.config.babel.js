// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpackValidator = require('webpack-validator')
const {resolve} = require('path')
const {getIfUtils} = require('webpack-config-utils')

module.exports = env => {
  const {ifProd, ifNotProd} = getIfUtils(env)
  const config = webpackValidator({
    context: resolve('src'),
    entry: './index.js',
    output: {
      filename: 'bundle.js',
      path: resolve('dist'),
      publicPath: '/dist/',
      pathinfo: ifNotProd()
    },
    devtool: ifProd('source-map', 'eval'),
    module: {
      loaders: [
        { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
        { test: /\.css$/, loader: 'style-loader!css-loader?modules' }
      ]
    }
  })
  if (env.debug) {
    console.log(config)
    debugger // eslint-disable-line
  }
  return config
}
