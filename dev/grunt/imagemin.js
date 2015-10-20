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
