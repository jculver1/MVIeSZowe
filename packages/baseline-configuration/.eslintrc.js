module.exports = {
  'root': true,
  'parser': 'babel-eslint',
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'settings': {
    'react': {
      'createClass': 'createReactClass',
      'pragma': 'React',
      'version': '16.8.6'
    }
  },
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'jest': true,
    'node': true
  },
  'parserOptions': {
    'ecmaFeatures': { 'jsx': true },
    'sourceType': 'module'
  },
  'plugins': ['react', 'jest'],
  // rules
  'rules': {
    'constructor-super': 'warn',
    'indent': ['warn', 2],
    'no-console': 'error',
    'no-const-assign': 'warn',
    'no-this-before-super': 'warn',
    'no-undef': 'warn',
    'no-unreachable': 'warn',
    'no-unused-vars': 'warn',
    'no-useless-escape': 'off',
    'max-len': ['warn', { 'code': 120, 'tabWidth': 2, 'ignoreComments': true }],
    'react/jsx-indent': ['warn', 2],
    'react/forbid-prop-types': 0,
    'valid-typeof': 'warn'
  },
  // override for ts,tsx
  'overrides': [
    {
      'files': ['src/**/*.ts', 'src/**/*.tsx'],
      'parser': '@typescript-eslint/parser',
      'parserOptions': {
        'project': './tsconfig.json'
      },
      'plugins': ['@typescript-eslint'],
      // rules
      'rules': {
        '@typescript-eslint/restrict-plus-operands': 'warn',
        '@typescript-eslint/class-name-casing': 'error',
        '@typescript-eslint/indent': ['warn', 2, {
          'SwitchCase': 0
        }],
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-use-before-define': 'error',
        'react/prop-types': 'off',
        'react/jsx-indent': 'off'
      }
    }
  ]
};
