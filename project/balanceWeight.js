//this function finds the possible ways to balance a weight
//arguments: 1st => [leftW, RightW], 2nd [available waight values]

const balanceWight = (twoSides, weights) => {
	if (twoSides[0] === twoSides[1]) {
		return 'Weight is already balanced';
	} else {
		const leftSide = twoSides[0];
		const rightSide = twoSides[1];
		const leftWeightVal = weights.map((val) => val + leftSide);
		const rightWeightVal = weights.map((val) => val + rightSide);

		//find balance by adding all avalable weight to both side and check if equal
		for (let x = 0; x < weights.length; x++) {
			for (let y = 0; y < weights.length; y++) {
				if (leftWeightVal[x] === rightWeightVal[y]) {
					let addedWeight = [ weights[y], weights[x] ];
					return addedWeight.sort().join(',');
				} else if (leftSide === weights[x] + weights[y] + rightSide) {
					let addedWeight = [ weights[y], weights[x] ];
					return addedWeight.sort().join(',');
				}
			}
		}
		return 'Weight cannot be balanced';
	}
};

let result = balanceWight([ 2, 3 ], [ 1, 4, 5, 6, 2, 3, 2 ]);
console.log(result);
