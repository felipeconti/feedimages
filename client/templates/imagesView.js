Template.imagesView.helpers({
	images: function () {
		return Images.find(); // Where Images is an FS.Collection instance
	}
});


Template.imagesView.events({
	'click #removeImage': function (event, template) {
		this.remove();
	}
});