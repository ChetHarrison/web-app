//   Module      : cssmin.js
// ----------------------------
//		Description : configures the grunt task
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
//
module.exports = {
	dist : {
		options : {
			report : 'min',
			sourceMap : true
		},
		files : {
			'<%= dir.prod %>css/main.css' : [
				'<%= dir.css %>**/*.css'
			]
		}
	}
};
