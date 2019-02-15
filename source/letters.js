'use strict';

const letters = ( string, flag ) => {
	if ( ( typeof string !== 'string' ) || ( ( typeof flag !== 'boolean' ) && ( flag !== undefined ) ) ) {
		return string;
	}

	let result = new Set();
	let repeat = new Set();

	// flag can be false or undefined - different logic in every way
	if ( flag === false ) {
		string = string.split('').reverse().join('');	
	}

	for ( let ch of string ) {
		if ( result.has( ch ) ) {
			continue;
		}
		
		if ( flag !== undefined ) {
			result.add( ch );
			continue;
		}  
		 
		if (repeat.has( ch )) {
		 	continue;
		}
	  
		if ( string.indexOf( ch, (string.indexOf(ch) + 1) ) !== -1 ) {
			repeat.add( ch );
			continue;
		} 
	  
		result.add( ch );
	}

	if ( flag === false ) {
		return Array.from(result).reverse().join('');	
	}

	return [...result].join('');
}
