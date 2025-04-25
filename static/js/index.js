window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function () {
	// Initialize all div with carousel class
	var options = {
		slidesToScroll: 1,
		slidesToShow: 1,
		loop: true,
		infinite: true,
		autoplay: false,
		autoplaySpeed: 5000,
	}
	var carousels = bulmaCarousel.attach('.carousel', options);

	// Display the right counterfactual video based on the radio button
	$('input[type="radio"').click(
		function () {
			const inputValue = $(this).attr("value");
			const targetVideo = $(".obj" + inputValue);
			$(".selectt").not(targetVideo).hide();
			$(targetVideo).show()
		}
	)
})
