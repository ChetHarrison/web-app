import App from 'app';
import Marionette from 'marionette';

describe( 'main-spec.js', () => {
	'use strict';

	it( 'creates a Marionette Application', () => {
		expect( App instanceof Marionette.Application ).toBe( true );
	} );

	it( 'app has a backbone attribute', () => {
		expect( App.backbone ).toBeDefined();
	} );

	// it( 'backbone.history to have started', () => {
	// 	App.start();
	// 	expect( App.backbone.History.started ).toBe( true );
	// } );

} );
