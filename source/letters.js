'use strict';

const letters = ( string, flag ) => {
	if ( typeof string !== 'string' ) {
		return string;
	}
	if (( flag !== true ) && ( flag !== false ) && ( flag !== undefined )) {
		return string;
	}
	let result = '';
	let characters = {};
	for ( let i = 0; i < string.length; i++ ) {
		( string[i] in characters ) ? characters[string[i]]++ : characters[string[i]] = 1
	}
	switch ( flag ) {
		case false:
			for ( let i = 0; i < string.length; i++ ) {
				--characters[string[i]];
				result = characters[string[i]] === 0 ? result + string[i] : result;
			}
			break;
		case true:
			for ( let i = string.length-1; i >= 0; i-- ) {
				--characters[string[i]];
				result = characters[string[i]] === 0 ? string[i] + result : result;
			}
			break;
		case undefined:	
			for ( let i = 0; i < string.length; i++ ) {	
				result = characters[string[i]] === 1 ? result + string[i] : result;
			}
			break;
		default:
			return undefined;
	}
	return result;
}
