function pigLatin(word) {
	const isVowel = (char) => {
		let newChar = char.toLowerCase();
		if (newChar === 'a' || newChar === 'e' || newChar === 'i' || newChar === 'o' || newChar === 'u') {
			return true;
		} else return false;
	};
	let consonant = '',
		newWord = '';
	for (let i = 0; i < word.length; i++) {
		if (isVowel(word[i])) {
			newWord = word.slice(i);
			break;
		} else consonant += word[i];
	}
	if (consonant.length > 0) {
		const result = newWord + consonant + 'ay';
		return result.toUpperCase();
	} else {
		const result = word + 'way';
		return result.toUpperCase();
	}
}

//result: EVELOPERDAY

// function subsetSum(numbers, target, month, partial, memory, preMemory) {
// 	let s, n, remaining;
// 	partial = partial || [];
// 	memory = memory || [];
// 	preMemory = preMemory || [];
// 	s = partial.reduce((a, b) => a + b, 0);
// 	if (s === target) {
// 		if (partial.length === month) {
// 			let preString = preMemory.toString();
// 			let partialString = partial.toString();
// 			if (preString !== partialString) {
// 				memory.push(partial);
// 				preMemory = [ ...partial ];
// 				console.log(preMemory.toString(), partial.toString());
// 			}
// 		}
// 	}
// 	// if(s >= target){
// 	//     return
// 	// }
// 	for (let i = 0; i < numbers.length; i++) {
// 		n = numbers[i];
// 		remaining = numbers.slice(i + 1);
// 		let newPartial = [ ...partial, n ];
// 		subsetSum(remaining, target, month, newPartial, memory, preMemory);
// 	}
// 	return memory.length;
// }
// //subsetSum([2,2,1,3,2],4,2)

// //Elivator distance calculater
// const distClac = (currentFloorLeftEl, currentFloorRightEl, calledEl) => {
// 	currentFloorLeftEl === 0 ? (currentFloorLeftEl = 1) : null;
// 	currentFloorRightEl === 0 ? (currentFloorRightEl = 1) : null;
// 	calledEl === 0 ? (calledEl = 1) : null;

// 	if (currentFloorLeftEl === currentFloorRightEl) {
// 		return 'Right';
// 	} else {
// 		if (calledEl < currentFloorLeftEl || calledEl < currentFloorRightEl) {
// 			if (currentFloorLeftEl - calledEl < currentFloorRightEl - calledEl) {
// 				return 'Left';
// 			} else {
// 				return 'Right';
// 			}
// 		} else {
// 			if (calledEl - currentFloorLeftEl > calledEl - currentFloorRightEl) {
// 				return 'Right';
// 			} else {
// 				return 'Left';
// 			}
// 		}
// 	}
// };

// console.log(distClac(2, 0, 1));

// ////
// class User {
// 	constructor(name) {
// 		this._name = name;
// 		this._lastLoggedInAt = null;
// 		this._isLoggedIn = false;
// 		this.logIn();
// 	}
// 	isLoggedIn() {
// 		return this.isLoggedIn;
// 	}
// 	getLastLoggedInAt() {
// 		return this._lastLoggedInAt;
// 	}
// 	logIn() {
// 		this._lastLoggedInAt = Date.now;
// 		this._isLoggedIn = true;
// 	}
// 	logOut() {
// 		this._isloggedIn = false;
// 	}
// 	getName() {
// 		return this._name;
// 	}
// 	setName(name) {
// 		this._name = name;
// 	}
// 	canEdit(comment) {
// 		if (this._name === comment.author._name) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}
// 	canDelete(comment) {
// 		return false;
// 	}
// }

// class Moderator extends User {
// 	constructor(name) {
// 		super(name);
// 	}
// 	canDelete(comment) {
// 		return true;
// 	}
// }

// class Admin extends Moderator {
// 	constructor(name) {
// 		super(name);
// 	}
// 	canEdit(comment) {
// 		return true;
// 	}
// 	canDelete(comment) {
// 		return true;
// 	}
// }

// class Comment {
// 	constructor(author, message, repliedTo = null) {
// 		this.author = author;
// 		this._message = message;
// 		this._repliedTo = repliedTo;
// 		this._createdAt = Date.now();
// 	}
// 	getMessage() {
// 		return this._message;
// 	}
// 	setMessage(message) {
// 		this._message = message;
// 	}
// 	getCreatedAt(timestamp) {
// 		this._createdAt = timestamp;
// 	}
// 	getAuthor() {
// 		return this.author;
// 	}
// 	getRepliedTo() {
// 		return this._repliedTo;
// 	}
// 	toString() {
// 		if (this._repliedTo == null) {
// 			return `${this._message} by ${this.author._name}`;
// 		} else {
// 			return `${this._message} by ${this.author._name} (replied to ${this._repliedTo.author._name})`;
// 		}
// 	}
// }
// const user = new User();

// code to check the possible combination between two or more numbers
for (let y = 0; y < 4; y++) {
	for (let x = 0; x < 4; x++) {
		for (let z = 0; z < 4; z++) {
			if (z + y + x !== 5) {
				console.log(y, z, x);
			}
		}
	}
}

// Link for ben: https://drive.google.com/file/d/1lTqmRwaK-3C8yiLzE3BzfCS1MdDYHYwi/view
// chineduochia@gmail.com
