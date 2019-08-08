const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const commonPaths = require('./paths');

const replaceTable = {
  breakingChangesX: true,
  componentsX: true
};

module.exports = {
  devtool: 'cheap-module-source-map',
  mode: 'development',
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      // source map loader
      {
        enforce: 'pre',
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'source-map-loader'
      },
      {
        test: /(\/|\\)FeatureFlags\.js$/,
        loader: 'string-replace-loader',
        options: {
          multiple: Object.keys(replaceTable).map(key => ({
            search: `export\\s+const\\s+${key}\\s*=\\s*false`,
            replace: `export const ${key} = ${replaceTable[key]}`,
            flags: 'i'
          }))
        }
      }
    ]
  },
  devServer: {
    contentBase: commonPaths.outputPath,
    compress: false,
    hot: true,
    port: 3000
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      ADMIN_FEATURE: JSON.stringify(true),
      DEVOPS_FEATURE: JSON.stringify(true),
      PERFORMANCE_FEATURE: JSON.stringify(true)
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
