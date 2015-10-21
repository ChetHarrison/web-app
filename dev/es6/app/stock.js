//   Module      : stock.js
// ----------------------------
//		Description : example of useing Sinonjs
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
// How to fake your `XMLHttpRequests` for fast testing
// Excerpt From: “Jasmine JavaScript Testing.” iBooks.
//
'use strict';

let Stock = function( options ) {
	options = options || {};
	this.symbol = options.symbol || 'AAPL';
};

Stock.prototype.fetch = function() {
	var that = this;
	var url = 'http://0.0.0.0:8000/stocks/' + that.symbol;

	$.getJSON( url, function( data ) {
		that.sharePrice = data.sharePrice;
	} );
};

export default Stock;

