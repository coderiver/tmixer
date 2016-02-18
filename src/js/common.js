$(document).ready(function() {

	// go js
	$('.banner__slides').slick({
		nextArrow: '.banner__next',
		prevArrow: '.banner__prev',
		slidesToShow: 1,
		slidesToScroll: 1
	})

	$('.js-signin,.popup').click(function(event) {
		$('.popup').toggle();
		return false
	});
});