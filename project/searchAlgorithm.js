// def subset_sum(numbers, target, partial=[]):
//     s = sum(partial)

//     # check if the partial sum is equals to target
//     if s == target:
//         print "sum(%s)=%s" % (partial, target)
//     if s >= target:
//         return  # if we reach the number why bother to continue

//     for i in range(len(numbers)):
//         n = numbers[i]
//         remaining = numbers[i+1:]
//         subset_sum(remaining, target, partial + [n])

//the js version without error
// function subsetSum1(numbers, target, partial) {
//   var s, n, remaining;

//   partial = partial || [];

//   // sum partial
//   s = partial.reduce(function (a, b) {
//     return a + b;
//   }, 0);

//   // check if the partial sum is equals to target
//   if (s === target) {
//     console.log(partial, target)
//   }

//   if (s >= target) {
//     return;  // if we reach the number why bother to continue
//   }

//   for (var i = 0; i < numbers.length; i++) {
//     n = numbers[i];
//     remaining = numbers.slice(i + 1);
//     subsetSum(remaining, target, partial.concat([n]));
//   }
// }

//I cleaned
// function subsetSum(numbers, target, partial) {
//     let s, n, remaining;
//     partial = partial || [];
//     s = partial.reduce((a, b) => a+b, 0);
//     s === target && console.log(partial, target)
//     if(s >= target){
//         return
//     }
//     for (let i = 0; i < numbers.length; i++) {
//       n = numbers[i];
//       remaining = numbers.slice(i + 1);
//       let newPartial = [...partial,n]
//       subsetSum(remaining, target,  newPartial);
//     }
//   }

//   function incrementSum(numbers, target) {
//     let num = []
//     const add = (num) => (num + num)
//     for(let i = 0; i < numbers.length; i++){
//       let currentNum = numbers[i];
//       let currentSum = 0;
//       if(num.length > 0){
//         currentSum = num.reduce((total,val) => total + val)
//       }
//       if(currentSum < target){

//       }

//     }
//   }

// incrementSum([3,9,8,4,5,7,10],15)

// //subsetSum([3,9,8,4,5,7,10],15)

// // my own js version with error
// function sum(number,target,partial=[]){
//     let sm = 0;
//     partial.map(val => sm += val)

//     if(sm === target){
//         console.log(partial,target)
//     }
//     if(sm >= target){
//         return}
//     for(let i=0; i < number.length; i++){
//         let n = number[i]
//         let remaining = number.splice(i);
//         let newPartial = [...partial,n];
//         sum(remaining,target,newPartial)
//     }
// }

// function countChange (money,coins, index = coins.length - 1) {
//   let _money = money
//   let _coinLength = coins.length
//   //creates an array of array with length equal to _money + 1, a children array length equal to _coi
//   let placeholder = Array(_money + 1).fill().map(() => Array(_coinLength).fill(0))

//  for (let i = 0; i < _coinLength; i++)
//    // fill first row and [i]th colum with 1
//      placeholder[0][i] = 1

//  for (let i = 1; i <= _money; i++) {
//      for (let j = 0; j <_coinLength; j++) {
//          let x = i - coins[j] >= 0 ? placeholder[i - coins[j]][j] : 0
//          // Count of solutions excluding coins[j]
//          let y = j > 0 ? placeholder[i][j - 1] : 0
//          placeholder[i][j] = x + y
//      }
//  }
//  return placeholder[_money][_coinLength-1]
//

// const findPairs = (numbers, target, partial, currentMatch) => {
//   var s, n, remaining;

//   partial = partial || [];
//   currentMatch = currentMatch || []
//   // sum partial
//   s = partial.reduce(function (a, b) {
//       return a + b;
//   }, 0);

//   // check if the partial sum is equals to target
//   if (s === target) {
//       console.log(partial, target)
//       currentMatch.push(partial)
//   }

//   if (s >= target) {
//       return ; // if we reach the number why bother to continue
//   }

//   for (var i = 0; i < numbers.length; i++) {
//       n = numbers[i];
//       remaining = numbers.slice(i + 1);
//       findPairs(remaining, target, partial.concat([n]), currentMatch);
//   }
//  return currentMatch
// }

// let value = findPairs([1,2,32,3,1],4);
// value.forEach((val) =>{
//   if(val.length === 2){
//     console.log(val)
//   }
// })

const devSumPair = (n, k, ar) => {
	let nums = [ 0 ] * k;
	let count = 0;
	ar.forEach((val) => {
		let modu = val % k;
		count += nums[(k - modu) % k];
		nums[modu] += 1;
	});
	return count;
};

console.log(devSumPair(4, 4, [ 1, 3, 1, 2 ]));

let tin = [ 0 ] * 5;
console.log(tin);

function divisiblesumpairs(n, k, a) {
	let compls = new Map(),
		count = 0;

	for (let i = 0; i < n; i++) {
		let m = a[i] % k,
			c = (k - m) % k,
			p,
			q;

		if ((p = compls.get(m))) count += p;

		if ((q = compls.get(c))) compls.set(c, ++q);
		else compls.set(c, 1);
	}
	return count;
}

const DrumPad = (props) => {
	const drumClicked = (e) => {
		const audio = document.getElementById(props.id);
		audio.play();
		props.setDisplayHandler(props.clip.description);
		console.log('clicking');
	};
	return (
		<div key={props.id} onClick={drumClicked} className="drum-pad">
			{props.id}
			<audio id={props.id} className="clip">
				<source src={props.clip.file} type="audio/ogg" />
				<source src={props.clip.file} type="audio/mpeg" />
				Your browser does not support the audio tag.
			</audio>
		</div>
	);
};

const App = () => {
	const [ display, setDisplay ] = React.useState('');
	const keys = [ 'Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C' ];
	const clips = {
		Q: {
			file: 'https://www.pacdv.com/sounds/domestic_sound_effects/can-to-table-2.wav',
			description: 'Can Table'
		},
		W: {
			file: 'https://www.pacdv.com/sounds/domestic_sound_effects/pot-lid-close-1.wav',
			description: 'Pot lid closed'
		},
		E: {
			file: 'https://www.pacdv.com/sounds/domestic_sound_effects/toaster_2.wav',
			description: 'Toaster bunch'
		},
		A: {
			file: 'https://www.pacdv.com/sounds/domestic_sound_effects/cigarette_lighter_1.wav',
			description: 'Cigarette Lighter'
		},
		S: {
			file: 'https://www.pacdv.com/sounds/domestic_sound_effects/doorbell-1.mp3',
			description: 'Door Bell'
		},
		D: {
			file: 'https://www.pacdv.com/sounds/domestic_sound_effects/phone-hang-up-1.mp3',
			description: 'Phone Hang up'
		},
		Z: {
			file: 'https://www.pacdv.com/sounds/domestic_sound_effects/door-squeak-1.wav',
			description: 'Door Squeak'
		},
		X: {
			file: 'https://www.pacdv.com/sounds/domestic_sound_effects/oven_door_1.mp3',
			description: 'Oven Door'
		},
		C: {
			file: 'https://www.pacdv.com/sounds/domestic_sound_effects/keys-drop-2.wav',
			description: 'Keys Drop'
		}
	};
	const setDisplayHandler = (value) => {
		setDisplay(value);
	};
	return (
		<div id="drum-machine">
			<div className="drum-container">
				{keys.map((key, index) => {
					return <DrumPad id={key} clip={clips[key]} setDisplayHandler={setDisplayHandler} />;
				})}
			</div>
			<div id="display">{this.display}</div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));

function mySort(nums) {
	let oddNum = [];
	let evenNum = [];
	for (let i = 0; i < nums.length; i++) {
		if (!isNaN(nums[i])) {
			let value = Math.floor(nums[i]);
			if (value % 2 >= 1) {
				oddNum.push(value);
			}
		}
	}
	oddNum.sort((a, b) => a - b);
	for (let i = 0; i < nums.length; i++) {
		if (!isNaN(nums[i])) {
			let value = Math.floor(nums[i]);
			if (value % 2 <= 0) {
				evenNum.push(value);
			}
		}
	}
	evenNum.sort((a, b) => a - b);

	return [ ...oddNum, ...evenNum ];
}

function power(a, b) {
	let value = 1;
	for (let i = 1; i <= b; i++) {
		value *= a;
	}
	return value;
}
