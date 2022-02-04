$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			// $('.scroll-top').css('display', 'block');
			$('.scroll-top').fadeIn();
		} else {
			$('.scroll-top').fadeOut();
			// $('.scroll-top').css('display', 'none');
		}
	});

	$('.scroll-top').click(function () {
		$("html, body").animate({
			scrollTop: 0
			}, 300);
		return false;
	});

});