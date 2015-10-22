//   Module      : docco.js
// ----------------------------
//		Description : configures the grunt task
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
//
module.exports = {
	doc : {
		src : [ '<%= concat.docs.dest %>' ],
		options : {
			output : '<%= dir.docs %>'
		}
	}
};
