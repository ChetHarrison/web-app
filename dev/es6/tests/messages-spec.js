import messages from 'messages';

describe( 'messages-spec.js', function() {
	'use strict';

	it( 'messages has getHello property', function() {
		expect( messages.getHello ).toBeDefined();
	} );
} );
