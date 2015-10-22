//   Module      : test.js
// ----------------------------
//		Description : register gurnt test task
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
//
module.exports = function( grunt ) {
	grunt.registerTask(
		'setup-tests',
		'Transpile test.',
		[ 'clean:tests', 'babel:tests', 'jasmine:phantom' ]
	);

	grunt.registerTask(
		'test',
		'Open a test server.',
		[ 'setup-tests', 'connect:tests' ]
	);
}
