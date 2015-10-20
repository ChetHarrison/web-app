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
