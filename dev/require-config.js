// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config( {
	baseUrl: '',

	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [ 'underscore', 'jquery' ],
			exports: 'Backbone'
		},
		bootstrap: {
			deps: [ 'jquery' ],
			exports: 'boostrap'
		},
		rx: {
			deps: [ 'marionette' ],
			exports: 'Rx'
		},
		'backbone.base-router': {
			deps: [ 'backbone', 'underscore' ],
			exports: 'BaseRouter'
		},
		'sanctuary': {
			deps: [ 'ramda' ]
		}
	},

	paths: {
		main			: 'es5/app/main',
		messages		: 'es5/app/messages',
		app				: 'es5/app/app',
		config			: 'es5/app/config',
		lib				: 'es5/app/lib',

		marionette		: '../bower_modules/backbone.marionette/lib/backbone.marionette',
		backbone		: '../bower_modules/backbone/backbone',
		radio			: '../bower_modules/backbone.radio/build/backbone.radio',
		jquery			: '../bower_modules/jquery/jquery',
		underscore		: '../bower_modules/underscore/underscore',
		rx				: '../bower_modules/rxjs/dist/rx.all',
		sanctuary		: '../bower_modules/sanctuary/index',
		firebase		: '../bower_modules/firebase/firebase',
		backbonefire	: '../bower_modules/backbonefire/dist/backbonefire',
	}
} );

// main.js will kick off the app.
requirejs( [ 'main' ], function() { } );
