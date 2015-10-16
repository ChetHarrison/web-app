import App from 'main';
import Marionette from 'marionette';
import Backbone from 'backbone';

describe( 'main-spec.js', function() {
	'use strict';

	it( 'creates a Marionette Application', function() {
		expect( App instanceof Marionette.Application ).toBe( true );
	} );

	it( 'app has a backbone attribute', () => {
		expect( App.backbone ).toBeDefined();
	} );

	it( 'backbone.history to have started', function() {
		expect( Backbone.History.started ).toBe( true );
	} );

} );
