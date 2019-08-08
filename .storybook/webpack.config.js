const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        sourceType: 'unambiguous',
        presets: [['react-app', { flow: false, typescript: true }]]
      }
    },
    {
      rules: [
        {
          test: /\.scss$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    }
  );
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
