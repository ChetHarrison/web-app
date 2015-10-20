module.exports = {
	tpl : {
		options : {

			// this path is relative to the built tpl.js dest property
			amd : 'bower_modules/handlebars/handlebars',

			namespace : 'tpl',

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
		files : [ {
			src : [ '<%= dir.es6 %>app/**/*.hbs' ],
			dest : '<%= dir.es5 %>tpl/tpl.js'
		} ]
	}
};
