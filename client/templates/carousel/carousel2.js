Template.carousel2.felipe = function(){
	return Images.find();
};

var carousel;

Template.carousel2.onRendered(function () {
	this.$('#carousel').slick({
		dots: false,
		arrows: false,
		infinite: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 2000,
		mobileFirst: true,
		pauseOnHover: false,
	});
});

Template.carousel2.events({
	'beforeChange #carousel': function (event, template, slick, currentSlide, nextSlide) {
		// console.log('event, template, slick, currentSlide, nextSlide');
		// console.dir(event);
		// console.dir(slick);
		// console.dir(template);
		// console.dir(currentSlide);
		// console.dir(nextSlide);
	}
});

Template.carousel2.helpers({
	images: function () {
		return Images.find(); // Where Images is an FS.Collection instance
	},
	addImage: function(){
		if (this.isUploaded() && this.url()){
			if (!carousel) carousel = $('#carousel');
			carousel.slick('slickPause');
			carousel.slick('slickAdd', '<div><img src="'+this.url({"store":"images"})+'" height="80%" width="80%"></div>');
			carousel.slick('slickPlay');
		}
	}
});
