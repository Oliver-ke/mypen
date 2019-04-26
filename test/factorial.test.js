const assert = require('chai').assert;
const factorial = require('../project/factorial');
//chai is an assertion library like the assert in node
//mocha is a testing framework for nodejs
describe('Factorial', () => {
	it('factorial should return the factorial', () => {
		assert.equal(factorial(), 'hello');
	});
});
