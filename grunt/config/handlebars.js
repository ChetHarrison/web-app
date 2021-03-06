//   Module      : handlebars.js
// ----------------------------
//		Description : configures the grunt task
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
//
module.exports = {
	options: {

		// This converts our file names into camelCase names.
		// For instance, some-name.okay.ext => someNameOkay
		processName : function( filename ) {
			var path = require( 'path' );
			var basename = path.basename( filename, path.extname( filename ) );
			return basename.replace( /[-\.]([a-z0-9] )/g, function( g ) {
				return g[ 1 ].toUpperCase();
			} );
		}
	},
	tpl : {
		options : {
			namespace : 'tpl',

			// this path is relative to the built tpl.js dest property
			amd : 'bower_modules/handlebars/handlebars',
		},

		files : [ {
			src : [ '<%= dir.es6 %>app/**/*.hbs' ],
			dest : '<%= dir.es5 %>tpl/tpl.js'
		} ]
	},
	fixtures : {
		options : {
			namespace : 'fixtures',

			// this path is relative to the built tpl.js dest property
			amd : '../bower_modules/handlebars/handlebars',
		},

		files : [ {
			src : [ '<%= dir.es6 %>tests/**/*.hbs' ],
			dest : '<%= dir.es5 %>tests/fixtures.js'
		} ]
	}
};
