//   Module      : imagemin.js
// ----------------------------
//		Description : configures the grunt task
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
// Here is a longer description of this module
//
module.exports = {
	dist : {
		files : [ {
			expand : true,
			cwd : '<%= dir.img %>',
			src : '**/*.{png,jpg,jpeg,ico}',
			dest : '<%= dir.prod %>img'
		} ]
	}
};
