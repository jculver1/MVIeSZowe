/* eslint-disable no-console */
//const webpackMerge = require('webpack-merge');
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack/webpack.common');
const zowe = process.env.ZOWE === 'TRUE';
const mvd = process.env.MVD_DESKTOP_DIR;
const plugin = 'plugin-config/webpack.react.base.js';
//console.log('zowe', zowe);
//console.log('mvd', mvd);
const base = !zowe ? null : require.resolve(path.resolve(mvd, plugin));
// const base = require('../../zlux-app-manager/virtual-desktop/plugin-config/webpack.react.base/config');

console.log(base);
const env = process.env.NODE_ENV || 'development';
const envConfig = require(`./webpack/webpack.${env}.js`);

if (zowe && process.env.MVD_DESKTOP_DIR === null) {
  throw new Error('Specify MVD_DESKTOP_DIR in your environment.');
}

module.exports = !zowe ? merge.smart(common, envConfig) : merge.smart(base.config, common, envConfig);
