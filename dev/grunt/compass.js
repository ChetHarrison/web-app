module.exports = {
	options : {
		sassDir : '<%= dir.bower %>sass-bootstrap/lib/',
		imagesDir : '<%= dir.img %>',
		javascriptsDir : '<%= dir.es5 %>',
		fontsDir : '<%= dir.bower %>sass-bootstrap/fonts',
		importPath : '<%= dir.bower %>sass-bootstrap/lib/',
		relativeAssets : true
	},
	dev : {
		options : {
			cssDir : '<%= dir.dev %>css',
			outputStyle : 'expanded',
			environment : 'development',
			debugInfo : true,
			trace : true,
			httpPath : '<%= dir.dev %>'
		}
	}
};
