process.env.NODE_ENV = process.env.NODE_ENV || 'test';
process.env.TEST_ENV = process.env.TEST_ENV || 'test';

global.chai = require('chai');
chai.config.includeStack = true;

global.expect = global.chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;
