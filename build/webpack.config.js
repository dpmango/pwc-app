const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
// const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

module.exports = {
  entry: {
    app: path.join(__dirname, '../src'),
  },
  output: {
    filename: 'assets/js/[name]-[hash].js',
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  regenerator: true,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loader: {
            scss: 'vue-style-loader!css-loader!sass-loader',
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: { path: path.join(__dirname, './postcss.config.js') },
            },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.svg$/,
        exclude: path.resolve(__dirname, '../src/assets/icons'),
        use: ['vue-loader', 'vue-svg-loader'],
      },
      {
        test: /\.svg$/,
        include: [path.resolve(__dirname, '../src/assets/icons')],
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              // extract: true,
            },
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeTitle: true },
                // { convertColors: { shorthex: false } },
                { convertPathData: true },
                {
                  removeAttrs: {
                    attrs: 'stroke|fill',
                  },
                },
              ],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.vue', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '~': path.resolve(__dirname, '../src'),
      vue$: 'vue/dist/vue.js',
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name]-[hash].css',
      publicPath: '/',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html'),
      filename: './index.html',
      title: 'Feature Today',
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: `${path.join(__dirname, '../src')}/static/**/*`,
    //       to: 'assets/static',
    //     },
    //   ],
    // }),
  ],
}
