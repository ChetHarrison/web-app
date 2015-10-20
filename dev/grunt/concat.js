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
		src : [ '<%= dir.es6 %>**/*.js' ],
		dest : '<%= dir.docs %><%= pkg.name %>.js'
	}
};