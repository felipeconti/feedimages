Images.allow({
	insert: function () {
		// add custom authentication code here
		return true;
	},
	update: function(){
		return true;
	},
	remove: function(){
		return true;
	},
	download: function() {
		return true;
	}
});
