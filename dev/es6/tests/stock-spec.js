import Stock from 'stock';
import sinon from 'sinon';

describe( 'stock-spec.js', function() {
	'use strict';

	beforeEach( function() {

		// fake XMLHttpRequest with Sinonjs
		let fetchRequest;
		this.xhr = sinon.useFakeXMLHttpRequest();
		this.xhr.onCreate = function( request ) {
			fetchRequest = request;
		};

		this.stock = new Stock();
		this.stock.fetch();

		fetchRequest.respond(
			200,
			{ 'Content-Type' : 'application/json' },
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
