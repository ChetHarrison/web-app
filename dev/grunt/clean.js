module.exports = {
	app : [ '<%= dir.prod %>', '<%= dir.es5 %>' ],
	tests : [ '<%= dir.tests %>es5' ],
	temp : [ '.grunt', '.sass-cache' ],
	docs : [ 'reports/docs' ],
	css : [ 'dev/css' ]
};
