module.exports = {
  compact: false,
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          firefox: '60',
          chrome: '67'
        },
        useBuiltIns: 'usage',
        corejs: 3
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    'lodash',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    '@babel/proposal-object-rest-spread'
  ],
  // cacheDirectory: true,
  env: {
    production: {
      ignore: [
        'src/**/*.test.tsx',
        'src/**/*.test.ts',
        'src/**/*.story.tsx',
        'src/**/*.story.ts',
        'src/**/*.test.jsx',
        'src/**/*.test.js',
        'src/**/*.story.jsx',
        'src/**/*.story.js',
        '__snapshots__',
        '__tests__',
        '__stories__',
        'lib',
        'coverage',
        'package',
        '*.config.js'
      ]
    }
  }
};
