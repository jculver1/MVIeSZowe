const path = require('path');
const webpack = require('webpack');
const convert = require('koa-connect');
const history = require('connect-history-api-fallback');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const commonPaths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const eslintPath = path.resolve(__dirname, 'eslint.config.js');

const startingPage =
  process.env.ZOWE === 'TRUE' ? commonPaths.entryPath : commonPaths.devPath;

const handler = (percentage, message, ...args) => {
  console.info(percentage, message, ...args);
};

module.exports = {
  output: {
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  entry: startingPage,
  module: {
    rules: [
      // eslint loader
      {
        enforce: 'pre',
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          emitWarning: process.env.NODE_ENV !== 'production'
          // fix: true,
          // configFile: 'eslint.config.js'
        }
      },
      // babel loader for js/jsx
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      },
      // babel loader for ts/tsx
      {
        test: /\.(ts|tsx)$/,
        loader: 'babel-loader'
      },
      
      // file loader for images
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.imagesFolder
            }
          }
        ]
      },
      // file loader for font
      {
        test: /\.(woff2|ttf|woff|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.fontsFolder
            }
          }
        ]
      },
      // scss loader
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              data: `
                $feature-flags: (
                  components-x: true,
                  grid: true,
                  ui-shell: true,
                );
              `,
              sourceMap: process.env.NODE_ENV !== 'production'
            }
          }
        ]
      }
    ]
  },
  serve: {
    add: app => {
      app.use(convert(history()));
    },
    content: commonPaths.startingPage,
    dev: {
      publicPath: commonPaths.outputPath
    }
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
    alias: {
      '@utils': path.resolve(__dirname, '../src/utils/'),
      '@common': path.resolve(__dirname, '../src/components/common/')
    }
  },
  plugins: [
    new webpack.ProgressPlugin(handler),
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(commonPaths.root, './src/assets'),
        to: path.resolve(commonPaths.outputPath, './assets')
      }
    ])
  ]
};
