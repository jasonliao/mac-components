module.exports = {
  verbose: true,
  moduleFileExtensions: ['tsx', 'ts', 'js', 'jsx'],
  setupTestFrameworkScriptFile: '<rootDir>/src/setupTests.ts',
  testMatch: [
    '**/__tests__/**/*.ts?(x)',
    '**/?(*.)+(spec|test).ts?(x)'
  ],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": '<rootDir>/__mocks__/styleMock.ts'
  }
}