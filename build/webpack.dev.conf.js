const { SourceMapDevToolPlugin, EnvironmentPlugin } = require('webpack')
const baseWebpackConfig = require('./webpack.config')
const { merge } = require('webpack-merge')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: '../dist',
    host: '0.0.0.0',
    port: 4200,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  plugins: [
    new EnvironmentPlugin({
      NODE_ENV: 'development',
      HOST: '',
    }),
    new SourceMapDevToolPlugin(),
  ],
})

module.exports = new Promise((resolve) => {
  resolve(devWebpackConfig)
})
