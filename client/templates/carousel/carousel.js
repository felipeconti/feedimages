Template.carousel.events({});
Template.carousel.helpers({});

Template.carouselImage.helpers({
	captionImage: function(){
		return "Caption";
	}
});

Template.carousel.onRendered(function () {
	$('.carousel').carousel({
		interval: 1000 //changes the speed
	})
});