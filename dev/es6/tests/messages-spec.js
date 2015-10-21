//   Module      : messages-spec.js
// ----------------------------
//		Description : example test
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
//
import messages from 'messages';

describe( 'messages-spec.js', function() {
	'use strict';

	it( 'messages has getHello property', function() {
		expect( messages.getHello ).toBeDefined();
	} );
} );
