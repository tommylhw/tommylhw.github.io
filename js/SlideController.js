$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 15) {
      $('.sub-header').css("box-shadow", "0 0 12px rgba(33,33,33,.5)");
		} else {
			$('.sub-header').css("box-shadow", "0 0 12px rgba(33,33,33,0)");
		}
  });
});