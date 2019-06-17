const path = require('path');

module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'vue',
    'json',
  ],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  moduleNameMapper: {
    '^packages/(.*)$': '<rootDir>/packages/$1',
    '^tests/(.*)$': '<rootDir>/tests/$1',
  },
  snapshotSerializers: [
    'jest-serializer-vue',
  ],
  setupFiles: ['<rootDir>/tests/jest.init.js'],
  testURL: 'http://localhost/',
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  collectCoverageFrom: [
    'packages/**/*.{js,jsx,ts,tsx,vue}',
    '!packages/index.ts',
    '!**/node_modules/**',
    '!**/style/**',
  ],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/tests/coverage/',
  coverageReporters: ['html', 'lcov', 'text-summary', 'json', 'text', 'clover'],
};
