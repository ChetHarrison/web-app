define( function( require ) {

	// Load any app-specific modules
	// with a relative require call,
	// like:
	var messages = require( 'app/messages' );

	console.log( messages );

	// Load library/vendor modules using
	// full IDs, like:
	var print = require( 'lib/print' );

	print( messages.getHello() );
} );
