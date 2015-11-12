Template.uploadImage.events({
	'change .myFileInput': function(event, template) {
		var files = event.target.files;
		for (var i = 0, ln = files.length; i < ln; i++) {
			var fileObj = new FS.File(files[i]);
			// fileObj.metadata = {index: -1};
			Images.insert(fileObj, function (err, fileObj) {
				// Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
			});
		}
	}
});