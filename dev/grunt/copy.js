module.exports = {
	index : {
		files : [ {
			expand : true,
			cwd : 'dev',
			src : [ 'index.html' ],
			dest : '<%= dir.prod %>'
		} ]
	}
};
