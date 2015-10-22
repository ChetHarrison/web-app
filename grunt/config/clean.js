//   Module      : clean.js
// ----------------------------
//		Description : configures the grunt task
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
//
module.exports = {
	app : [ '<%= dir.prod %>', '<%= dir.es5 %>' ],
	tests : [ '<%= dir.tests %>es5' ],
	temp : [ '.grunt', '.sass-cache' ],
	docs : [ 'reports/docs' ],
	css : [ 'dev/css' ]
};
