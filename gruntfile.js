'use strict';

var gruntPath = './dev/grunt/',

	configure = function( taskFileName ) {
		var path = gruntPath + taskFileName + '.js';
		return require( path );
	},

	tasks = [
		'concat',
		'connect',
		'watch',
		'clean',
		'babel',
		'handlebars',
		'requirejs',
		'copy',
		'jasmine',
		'plato',
		'docco',
		'compass',
		'rename',
		'cssmin',
		'imagemin'
	],

	// build the grunt configuration object by
	// requiring each tasks configuration file.
	// Task configuration files shoule be located
	// at the `gruntPath` at the top of this file..
	configuration = tasks.reduce( function( obj, task ) {
		obj[ task ] = configure( task );
		return obj;
	}, {} );

configuration.dir = require( gruntPath + 'dir-config.js' );
configuration.pkg = require( './package.json' );

module.exports = function( grunt ) {

	require( 'time-grunt' )( grunt );

	grunt.initConfig( configuration );

	// ---------------------------------------------------------
	// Load tasks but filter the grunt-template-jasmine files
	require( 'matchdep' )
		.filterAll( 'grunt-*' )
		.filter( function( task ) {
			return task.indexOf( 'grunt-template-jasmine' ) === -1;
		} )
		.forEach( grunt.loadNpmTasks );

	// ---------------------------------------------------------
	// Register tasks
	grunt.registerTask(
		'setup-docs',
		'Generate documentation using docco.',
		[ 'clean:docs', 'concat:docs', 'docco' ]
	);

	grunt.registerTask(
		'doc',
		'Open a documentation server.',
		[ 'setup-docs', 'connect:docs' ]
	);

	grunt.registerTask(
		'setup-tests',
		'Transpile test.',
		[ 'clean:tests', 'babel:tests', 'jasmine:phantom' ]
	);

	grunt.registerTask(
		'coverage',
		'Coverage report.',
		[ 'clean:tests', 'babel:tests', 'jasmine:coverage' ]
	);

	grunt.registerTask(
		'test',
		'Open a test server.',
		[ 'setup-tests', 'connect:tests' ]
	);

	grunt.registerTask(
		'build',
		'Build production files to "dest" folder.',
		[
			'clean:app',
			'setup-docs',
			'handlebars',
			'copy',
			'babel:app',
			'clean:css',
			'compass',
			'rename',
			'setup-tests',
			'requirejs',
			'cssmin',
			'imagemin',
			'jasmine:coverage'
		]
	);

	grunt.registerTask(
		'default',
		'Watch files and run tests',
		[ 'watch' ]
	);
};
