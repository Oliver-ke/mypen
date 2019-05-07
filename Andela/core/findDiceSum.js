const findDiceSum = (dice) => {
	//debugger;
	if (dice.length >= 3) {
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
	} else {
		return 'dice length is less than 3';
	}
};

module.exports = findDiceSum;
