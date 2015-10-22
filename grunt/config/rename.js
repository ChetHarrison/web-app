//   Module      : rename.js
// ----------------------------
//		Description : configures the grunt task
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
//

// **Warning:** This assumes there will only be
// one css file in the src dir. Otherwise it
// will attemt to name several files with the
// same name
module.exports = {
	main : {
		files : [ {
			src : [ '<%= dir.css %>*.css' ],
			dest : '<%= dir.css %>main.css'
		} ]
	}
};
