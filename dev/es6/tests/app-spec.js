//   Module      : app-spec.js
// ----------------------------
//		Description : A few example tests
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
// This shows a few simple Marionette tests and how
// to generate a Handlebars test fixture and import
// it into your `spec-runner.html`.
//
import App from 'app';
import Marionette from 'marionette';
import jj from 'jasmine-jquery';
import $ from 'jquery';
import fixtures from 'fixtures';

describe( 'main-spec.js', function() {
	'use strict';

	// Note **don't use the fat arrow function** if you want to
	// use `this` for passing vars. And trust me, you do.
	// [Info](http://jasmine.github.io/2.0/introduction.html#section-The_<code>this</code>_keyword)
	beforeEach( function() {

		// add a handlebars fixture to your spec-runner this way
		$( 'body' ).append( '<div id="fixtures" style="display: none;"></div>' );
		$( '#fixtures' ).append( fixtures.main( { content: 'Foo for you' } ) );
	} );

	afterEach( function() {
		$( '#fixtures' ).detach();
	} );

	it( 'creates a Marionette Application', function() {
		expect( App instanceof Marionette.Application ).toBe( true );
	} );

	it( 'app has a backbone attribute', function() {
		expect( App.backbone ).toBeDefined();
	} );

} );
