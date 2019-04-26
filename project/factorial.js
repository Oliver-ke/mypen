//Arity is the number of arguments a function takes
const makeProfile = (name, age, avater) => {
	console.log(`name: ${name}, age: ${age} avater: ${avater}`);
};

let arity = makeProfile.length;
console.log(arity);

//3

//finding factorial using recorsion
const findFactorial = (num) => {
	if (num > 1) {
		return findFactorial(num - 1) * num;
	} else {
		return num;
	}
};

let factorial = findFactorial(4);
console.log(factorial);

//find factorial using loops
const findFactorial2 = (num) => {
	if (num > 1) {
		let stack = num * (num - 1);
		for (let i = num - 2; i > 0; i--) {
			stack = stack * i;
		}
		return stack;
	} else {
		return num;
	}
};

let factorial2 = findFactorial2(2);
console.log(factorial2);

//understanding return statements in loops or conditional
function findTwo(arr, searchInput) {
	for (let x = 0; x <= arr.length; x++) {
		if (arr[x] == searchInput) {
			return true;
		} else {
			console.log('finding');
		}
	}
	return false;
}
//here the loop is broke one the condition is meet, the function returns, else in any funtion return can only me meet once;

const gambling = (dice) => {
	if (dice.length >= 3) {
		let sum = null;
		let privMatched = null;
		dice.forEach((val) => {
			if (val !== 6 && val !== 1 && privMatched === null) {
				sum += val;
			} else {
				if (privMatched) {
					if (privMatched === 6) {
						sum += val * 2;
					}
					if (val === 1 || val === 6) {
						privMatched = val;
					} else {
						privMatched = null;
					}
				} else {
					sum += val;
					privMatched = val;
				}
			}
		});
		return sum;
	} else {
		return 'Array must be greater than or equal to 3';
	}
};
