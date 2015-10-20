//	TODO: This depends on the concat task.
// Remove that dep.
module.exports = {
	doc : {
		src : [ '<%= concat.docs.dest %>' ],
		options : {
			output : '<%= dir.docs %>'
		}
	}
};
