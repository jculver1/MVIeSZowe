const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../../web'),
  devPath: path.resolve(__dirname, '../src/dev.jsx'),
  entryPath: path.resolve(__dirname, '../src/index.jsx'),
  templatePath: path.resolve(__dirname, '../src/template.html'),
  assetsFolder: 'assets',
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
  eslintPath: path.resolve(__dirname, '../eslint.config.js')
};
