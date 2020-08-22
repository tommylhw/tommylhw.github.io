$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 5) {
			$('header').css("background", "var(--purple-theme-color)");
			$('header a').css("color", "#fff");
			$('header ul li').hover(function() {
				$(this).css("border", "1px solid #fff");
			});
			$('header ul li').mouseleave(function() {
				$(this).css("border", "1px solid rgba(33,33,33,0)");
			});
		} else {
			$('header').css("background", "rgba(33,33,33,0)");
			$('header a').css("color", "var(--purple-theme-color)");
			$('header ul li').hover(function() {
				$(this).css("border", "1px solid var(--purple-theme-color)");
			});
			$('header ul li').mouseleave(function() {
				$(this).css("border", "1px solid rgba(33,33,33,0)");
			});
		}
	});
});