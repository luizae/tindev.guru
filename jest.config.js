module.exports = {
  name: 'xQueue Frontend',
  verbose: true,
  testMatch: ['<rootDir>/src/**/__test__/?(*.)+(spec|test).js?(x)'],
  // preset: 'jest-puppeteer',
  automock: false,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.js?(x)'],
  reporters: ['default', '<rootDir>/reporter.js'],
  moduleNameMapper: {
    '.+\\.(svg|png|jpg|css|scss|ttf|woff|woff2)$': 'identity-obj-proxy',
  },
  coverageReporters: ['lcov', 'html', 'json'],
  moduleNameMapper: {
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
}
