//   Module      : concat.js
// ----------------------------
//		Description : configures the grunt task
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
//
module.exports = {
	options : {
		stripBanners : true,
		banner : '// ## v <%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'\'use strict\';\n',
		process : function( src, filepath ) {
			return '// Source : ' + filepath + '\n' +
				src.replace( /(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1' );
		}
	},
	docs : {
		// Note: you will probably not want to document your tests
		// and gruntfiles. It is here to help you understand how the
		// development tools are set up. You can target the `app`
		// directory here.
		src : [ '<%= dir.es6 %>**/*.js', 'gruntfile.js', 'grunt/**/*' ],
		dest : '<%= dir.docs %><%= pkg.name %>.js'
	}
};
