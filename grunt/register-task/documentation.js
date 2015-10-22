//   Module      : setup-docs.js
// ----------------------------
//		Description : registers the grunt doc task
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
//
module.exports = function( grunt ) {
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
}
