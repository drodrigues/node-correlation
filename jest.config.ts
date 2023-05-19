import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  roots: ['<rootDir>'],
  testEnvironment: 'node',
  preset: 'ts-jest',
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/node_modules/**', '!**/vendor/**'],
};

export default config;
