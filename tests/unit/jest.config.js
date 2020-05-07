const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: ['js', 'json', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  testPathIgnorePatterns: ['<rootDir>/tests/e2e'],
  snapshotSerializers: ['jest-serializer-vue'],
  setupFiles: ['<rootDir>/tests/unit/jest.setup.js', '<rootDir>/tests/unit/jest.init.js'],
  clearMocks: true,
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,vue}', '!src/main.js', '!src/router/index.js', '!src/lodash/index.js', '!**/node_modules/**'],
  coveragePathIgnorePatterns: ['/node_modules/', '/mixins/'],
  coverageReporters: ['html', 'text-summary']
}
