const path = require('path');
const webpack = require('webpack');
const BrotliGzipPlugin = require('brotli-gzip-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const commonPaths = require('./paths');

module.exports = {
  mode: 'production',
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    pathinfo: false
  },
  performance: {
    hints: 'warning'
  },
  module: {
    rules: []
  },
  plugins: [
    new BrotliGzipPlugin({
      asset: '[path].br[query]',
      algorithm: 'brotli',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new CleanWebpackPlugin(path.resolve(commonPaths.outputPath), {}),
    new CompressionPlugin({
      test: /\.(js|css|html|svg)$/,
      cache: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'ADMIN_FEATURE': JSON.stringify(true),
      'DEVOPS_FEATURE': JSON.stringify(false),
      'PERFORMANCE_FEATURE': JSON.stringify(true)
    }),
    new HtmlWebpackPlugin({
      inject: true,
      hash: false,
      template: commonPaths.templatePath
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  optimization: {
    //noEmitOnErrors: true, Need more research. Might swallow webpack errors!
    checkWasmTypes: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
        terserOptions: {
          output: {
            comments: false
          },
          toplevel: true
        }
      })
    ]
    //runtimeChunk: 'single',
    // splitChunks: {
    //   chunks: 'all',
    //   maxInitialRequests: Infinity,
    //   minSize: 0,
    //   cacheGroups: {
    //     vendor: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name(module) {
    //         // get the name. E.g. node_modules/packageName/not/this/part.js
    //         // or node_modules/packageName
    //         const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
    
    //         // npm package names are URL-safe, but some servers don't like @ symbols
    //         return `npm.${packageName.replace('@', '')}`;
    //       },
    //     },
    //   },
    // },
  }
};
