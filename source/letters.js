'use strict';

const letters = ( string, flag ) => {
	if ( typeof string !== 'string' ) {
		return string;
	}
	if (( flag !== true ) && ( flag !== false ) && ( flag !== undefined )) {
		return string;
	}
	let result = '';
	if ( flag === true ) {
		result += string[0]
	} else if ( string.lastIndexOf( string[0] ) === 0 ) {
		result += string[0];
	} 
	switch ( flag ) {
		case false:
			for ( let i = 1; i < string.length; i++ ) {
				if ( i === string.lastIndexOf( string[i] )) {
					result += string[i];
				} 
			}
			break;
		case true:
			for ( let i = 1; i < string.length; i++ ) {
				if ( string.lastIndexOf( string[i], i-1 ) === -1 ) {
					result += string[i];
				} 
			}
			break;
		case undefined:	
			for ( let i = 1; i < string.length; i++ ) {	
				if ( ( i === string.lastIndexOf( string[i] ) ) && ( string.lastIndexOf( string[i], i-1 ) === -1 ) ) {	
					result += string[i];
				}
			}
			break;
		default:
			return undefined;
	}
	return result;
}

console.log(letters('1234'));