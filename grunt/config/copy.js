//   Module      : copy.js
// ----------------------------
//		Description : configures the grunt task
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
//
module.exports = {
	index : {
		files : [ {
			expand : true,
			cwd : 'dev',
			src : [ 'index.html' ],
			dest : '<%= dir.prod %>'
		} ]
	}
};
