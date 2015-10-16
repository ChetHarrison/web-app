import main from 'main';
import Marionette from 'marionette'

describe( 'main-spec.js', function() {
	'use strict';

	it( 'creates a Marionette Application', function() {
		expect( main instanceof Marionette.Application ).toBe( true );
	} );
} );
