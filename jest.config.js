module.exports = {
  verbose: true,
  moduleFileExtensions: ['tsx', 'ts', 'js', 'jsx'],
  setupTestFrameworkScriptFile: '<rootDir>/test/setupTests.js',
  testMatch: [
    '**/__tests__/**/*.ts?(x)',
    '**/?(*.)+(spec|test).ts?(x)'
  ],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.js$': 'babel-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": '<rootDir>/test/__mocks__/styleMock.js'
  },
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [151001]
      }
    }
  }
}