//   Module      : stock-spec.js
// ----------------------------
//		Description : example using Sinonjs
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
// Use Sinon to fake all your `XMLHttpRequest`s this
// will speed you your front end tests.
//
import Stock from 'stock';
import sinon from 'sinon';

const fetchStock = ( context ) => {
	context.stock = new Stock();
	context.stock.fetch();
};

describe( 'stock-spec.js', function() {
	'use strict';

	// Using Sinonjs `useFakeXMLHttpRequest`
	describe( 'when using useFakeXMLHttpRequest', function() {

		beforeEach( function() {
			let fetchRequest;
			this.xhr = sinon.useFakeXMLHttpRequest();
			this.xhr.onCreate = function( request ) {
				fetchRequest = request;
			};

			fetchStock( this );

			fetchRequest.respond(
				200, {
					'Content-Type': 'application/json'
				},
				'{ "sharePrice" : 20.13 }'
			);
		} );

		afterEach( function() {
			this.xhr.restore();
		} );

		it( 'should update is share price', function() {
			expect( this.stock.sharePrice ).toEqual( 20.13 );
		} );

	} );

	// Using Sinonjs `fakeServer`
	describe( 'when fetched using fakeServer', function() {

		beforeEach( function() {
			this.xhr = sinon.fakeServer.create();
			this.xhr.respondWith( [
				200, {
					'Content-Type': 'application/json'
				},
				'{ "sharePrice": 20.13 }'
			] );

			fetchStock( this );

			this.xhr.respond();
		} );

		afterEach( function() {
			this.xhr.restore();
		} );

		it( 'should update its share price', function() {
			expect( this.stock.sharePrice ).toEqual( 20.13 );
		} );
	} );

} );
