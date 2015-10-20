import App from 'app';
import Marionette from 'marionette';
import jj from 'jasmine-jquery';
import $ from 'jquery';
import fixtures from 'fixtures';

describe( 'main-spec.js', () => {
	'use strict';

	beforeEach( () => {
		$( 'body' ).append( '<div id="fixtures" style="display: none;"></div>' );
		$( '#fixtures' ).append( fixtures.main( { content: 'Foo for you' } ) );
	} );

	afterEach( () => {
		$( '#fixtures' ).detach();
	} );

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
