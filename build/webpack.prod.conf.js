const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config')
const { EnvironmentPlugin } = require('webpack')

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  plugins: [
    new EnvironmentPlugin({
      NODE_ENV: 'production',
      HOST: '',
    }),
  ],
})

module.exports = new Promise(resolve => {
  resolve(buildWebpackConfig)
})
