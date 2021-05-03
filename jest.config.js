module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
  moduleDirectories: ['node_modules', 'src'],
  transformIgnorePatterns: ['/node_modules/rc-slider'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js'
  }
}
