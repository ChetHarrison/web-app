//   Module      : watch.js
// ----------------------------
//		Description : configures the grunt task
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
//
module.exports = {
	options : {
		livereload : true
	},
	js : {
		files : [
			'<%= dir.es6 %>**/*',
			'dev/require-config.js',
			'gruntfile.js'
		],
		tasks : [ 'build' ]
	},
	css : {
		files : [
			'<%= dir.bower %>sass-bootstrap/lib/**/*'
		],
		tasks : [ 'clean:css', 'compass' ]
	}
};
