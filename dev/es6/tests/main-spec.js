import App from 'app';
import Marionette from 'marionette';
import jj from 'jasmine-jquery';
import $ from 'jquery';
import fixtures from 'fixtures';
import sinon from 'sinon';

describe( 'main-spec.js', function() {
	'use strict';

	beforeEach( function() {
		// Note don't use the fat arrow function if you want to
		// use `this` for passing vars. And trust me, you do.
		// http://jasmine.github.io/2.0/introduction.html#section-The_<code>this</code>_keyword

		// add a handlebars fixture to your spec-runner this way
		$( 'body' ).append( '<div id="fixtures" style="display: none;"></div>' );
		$( '#fixtures' ).append( fixtures.main( { content: 'Foo for you' } ) );

		// fake XMLHttpRequest with Sinonjs
		let fetchRequest;
		this.xhr = sinon.useFakeXMLHttpRequest();
		this.xhr.onCreate = function( request ) {
			fetchRequest = request;
		};
		$.ajax();
		fetchRequest.respond(
			200,
			{ "Content-Type" : "application/json" },
			'{ "key" : "fakeValue" }'
		);
	} );

	afterEach( function() {
		$( '#fixtures' ).detach();
		this.xhr.restore();
	} );

	it( 'creates a Marionette Application', function() {
		expect( App instanceof Marionette.Application ).toBe( true );
	} );

	it( 'app has a backbone attribute', function() {
		expect( App.backbone ).toBeDefined();
	} );

	// it( 'backbone.history to have started', function() {
	// 	App.start();
	// 	expect( App.backbone.History.started ).toBe( true );
	// } );

} );
