module.exports = {
	report : {
		options : {

			// jshint: grunt.file.readJSON(".jshintrc")
		},
		files : {
			'reports/analysis' : [ '<%= dir.es5 %>**/*.js' ]
		}
	}
};
