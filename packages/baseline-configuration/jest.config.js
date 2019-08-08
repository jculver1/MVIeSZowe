//path module to resolve paths
const path = require('path');

//config path
const configPath = path.resolve(__dirname, `../../config`);
//current directory path
const currDir = path.resolve(__dirname);

//test setup files path
const testSetupPath = `${configPath}/jest/test-setup.js`;
const testShimPath = `${configPath}/jest/test-shim.js`;

//transform files path
const babelJestPath = `${currDir}/node_modules/babel-jest`;
// const tsJestPath = `${currDir}/node_modules/ts-jest`;

//test match
const testMatch = `**/__tests__/*.(ts|tsx|js|jsx)`;
//test url
const testURL = `http://localhost`;

//export jest configuration object
module.exports = {
  //base setup files
  setupFiles: [testSetupPath, testShimPath],
  //module extensions
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  //module mapper for scss
  moduleNameMapper: {
    /* '^.+\\.(css|less|scss)$': 'babel-jest',*/
    '^.+\\.(css|less|scss)$': babelJestPath,
    '@utils(.*)$': '<rootDir>/utils$1',
    '@common(.*)$': '<rootDir>/components/common$1'
    /*'@carbon(.*)$': `${currDir}/node_modules/@carbon$1`*/
  },
  //transpiling tsx/ts/jsx/js
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': babelJestPath
  },
  //match pattern
  testMatch: [testMatch],
  //test ignore paths
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  //test url
  testURL: testURL,
  //coverage directory location
  coverageDirectory: '../coverage',
  //coverage ignore paths
  // coveragePathIgnorePatterns: [configPath],
  //collect coverage
  collectCoverage: true,
  //verbose
  verbose: true,
  transformIgnorePatterns: ['/node_modules/', '/lib/']
};
