//Loads script only when the DOM has completely rendered
document.addEventListener('DOMContentLoaded', () => {
	//Dice sum algorithm function
	const findDiceSum = (dice) => {
		let sum = null;
		let sixOrOneFound = null;
		dice.forEach((val) => {
			if (val !== 6 && val !== 1 && sixOrOneFound === null) {
				sum += val;
			} else {
				if (sixOrOneFound) {
					if (sixOrOneFound === 6) {
						sum += val * 2;
					}
					//for zero we do noting since any value + zero return that same value
					if (val === 1 || val === 6) {
						sixOrOneFound = val;
					} else {
						sixOrOneFound = null;
					}
				} else {
					sum += val;
					sixOrOneFound = val;
				}
			}
		});
		return sum;
	};

	const input = document.getElementById('dice-input');
	const button = document.getElementById('submit-btn');
	const resultDiv = document.querySelector('.result h2 > span');
	const warning = document.querySelector('.warning');
	button.addEventListener('click', () => {
		let inputValue = input.value;
		if (inputValue.length >= 3) {
			// converting the string input to a number array
			// the + turns individual types into number
			const numArr = [];
			for (val in inputValue) numArr.push(+inputValue[val]);
			//calling the findDiceSum function
			let sum = findDiceSum(numArr);
			warning.innerText = '';
			resultDiv.innerText = sum;
		} else {
			resultDiv.innerText = '';
			warning.innerText = 'Error, No value inputed or value is less then 3 digits';
		}
	});
});
