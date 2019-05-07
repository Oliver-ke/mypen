let closure = (name) => {
	let counter = 0;
	console.log('this is the closure');
	return () => {
		counter += 1;
		console.log(name, counter);
		return counter;
	};
};

let value = closure('count one:');
let value2 = closure('count two:');

setInterval(value, 1000);
setInterval(value2, 2000);

/*
know that "in" and "of" are similar but
"in" point to the key in object and to the index in array
while "of" points to value in array and does not work for object

*/
