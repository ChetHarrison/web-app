//   Module      : connect.js
// ----------------------------
//		Description : configures the grunt task
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
//
var port = 9000;

module.exports = {
	options : {
		hostname : 'localhost'
	},

	dev : {
		options : {
			keepalive : true,
			port : port,
			open : {
				target : 'http://localhost:' + port + '/<%= dir.dev %>index.html'
			}
		}
	},

	prod : {
		options : {
			keepalive : true,
			port : ++port,
			open : {
				target : 'http://localhost:' + port + '/<%= dir.prod %>index.html'
			}
		}
	},

	tests : {
		options : {
			keepalive : true,
			port : ++port,
			open : {
				target: 'http://localhost:' + port + '/spec-runner.html'
			}
		}
	},

	coverage : {
		options : {
			keepalive : true,
			port : ++port,
			open : {
				target : 'http://localhost:' + port + '/<%= dir.coverage %>html'
			}
		}
	},

	docs : {
		options : {
			keepalive : true,
			port : ++port,
			open : {
				target : 'http://localhost:' + port + '/<%= dir.docs %><%= pkg.name %>.html'
			}
		}
	},

	analysis : {
		options : {
			keepalive : true,
			port : ++port,
			open : {
				target : 'http://localhost:' + port + '/<%= dir.analysis %>'
			}
		}
	}
};
