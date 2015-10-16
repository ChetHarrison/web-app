// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config( {
	baseUrl: '',
	paths: {
		main: 'es5/app/main',
		messages: 'es5/app/messages',
		lib: 'es5/app/lib',
		bower: '../bower_modules'
	}
} );

// Start loading the main app file. Put all of
// your application logic in there.
requirejs( [ 'main' ], function() { } );
