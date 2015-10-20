// Warning: This assumes there will only be
// one css file in the src dir. Otherwise it
// will attemt to name several files with the
// same name

module.exports = {
	main : {
		files : [ {
			src : [ '<%= dir.css %>*.css' ],
			dest : '<%= dir.css %>main.css'
		} ]
	}
};
