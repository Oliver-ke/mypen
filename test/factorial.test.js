//chai is an assertion library like the assert in node
//mocha a testing framework for nodejs, npm run test -s or json-> mocha || true
const assert = require('chai').assert;
const findSum = require('../Andela/core/findDiceSum');

describe('Finds the sum algorithm', () => {
	describe('check return value', () => {
		it('return 8 for 4 for [1,2,3]', () => {
			assert.equal(findSum([ 1, 2, 3 ]), 4);
		});
		it('should return a number', () => {
			//check the return value of a function if its a number returns true or false
			assert.isNumber(findSum([ 3, 4, 5 ]));
		});
	});
	describe('check string type and return type', () => {
		it('third test', () => {
			assert.equal(findSum([ 6, 1, 1 ]), 8);
		});

		it('should accept input of length > 3 else return a string', () => {
			let result = findSum([ 1, 2 ]);
			assert.isString(result);
		});
	});
});

//describe can be nested;
