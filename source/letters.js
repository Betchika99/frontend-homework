'use strict';

const letters = ( string, flag ) => {
	if (typeof string !== 'string' || (typeof flag !== 'boolean' && typeof flag !== 'undefined')) {
		console.log("BBBLAAAAA");
		return string;
	}

	let result = new Set();
	let repeat = new Set();

	// flag can be false or undefined - different logic in every way
	if (flag === false) {
		string = string.split('').reverse().join('');	
	}

	let mode = flag === undefined ? 'all' : 'one';

	for (let ch of string) {
		let hasDouble = string.indexOf(ch) !== string.lastIndexOf(ch) ? true : false;
		if (!hasDouble) {
			result.add(ch);
		} else if ( !repeat.has(ch) ) {
			repeat.add(ch);
			mode === 'one' && result.add(ch);
		}
	}

	if (flag === false) {
		return Array.from(result).reverse().join('');	
	}

	return [...result].join('');
}

console.log(letters('111'));