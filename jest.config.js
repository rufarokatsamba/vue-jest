module.exports = {
    modulePaths: [
      '<rootDir>/src',
      '<rootDir>/node_modules'
    ],
    moduleNameMapper: {
      '^src(.*)$': '<rootDir>/src$1',
      '^lodash-es$': 'lodash',
      '^@/(.*)$': '<rootDir>/$1',
      '^~/(.*)$': '<rootDir>/$1',
      '^vue$': 'vue/dist/vue.common.js',
      '\\.(css|less|scss|sass|sss|styl)$': '<rootDir>/node_modules/jest-css-modules'
    },
    transform: {
      '^.+\\.js$': 'babel-jest',
      "^.+\\.vue$": "@vue/vue2-jest",
    },
    moduleFileExtensions: ['js', 'vue', 'json','jsx'],
    silent: true,
    collectCoverage: true,
    collectCoverageFrom: [
      '<rootDir>/src/**/*.vue',
    ],
    transformIgnorePatterns: [
      '/node_modules/'    
    ],
    //testMatch: ['<rootDir>/tests/**/*.spec.ts']
  }