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
		console.log(slick.$slides[nextSlide].id);
		var id = slick.$slides[nextSlide].id;
		var img = Images.find(id);
		if (img)
			// console.dir(img)
			console.log("Achou!")
		else
			console.log("Não achou!");
	}
});

Template.carousel2.helpers({
	images: function () {
		return Images.find(); // Where Images is an FS.Collection instance
	},
	addImage: function(){
		if (this.isUploaded() && this.url()){
			if (!carousel) carousel = $('#carousel');

			// Images.update({_id: this._id}, {$set: {'metadata.index': carousel.slick('currentIndex')} })

			carousel.slick('slickPause');
			//carousel.slick('slickAdd', '<div><img id="'+this.name()+'" src="'+this.url({"store":"images"})+'" height="80%" width="80%"></div>');
			carousel.slick('slickAdd', '<img id="'+this.name()+'" src="'+this.url({"store":"images"})+'" height="80%" width="80%">');
			carousel.slick('slickPlay');
		}
	}
});
