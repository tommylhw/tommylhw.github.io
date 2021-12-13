$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 10) {
			$('header').css("box-shadow", "0 0 30px grey");
			$('header').css("padding", "0px 20px");
			$('header').css("background", "var(--purple-theme-color)");
			$('header a').css("color", "#fff");
			$('header ul li').hover(function() {
				$(this).css("border", "1px solid #fff");
			});
			$('header ul li').mouseleave(function() {
				$(this).css("border", "1px solid rgba(33,33,33,0)");
			});
			$('.nav-icon3-container').css("top", "23px");
		} else {
			$('header').css("box-shadow", "none");
			$('header').css("padding", "20px 20px");
			$('header').css("background", "rgba(33,33,33,0)");
			$('header a').css("color", "var(--purple-theme-color)");
			$('header ul li').hover(function() {
				$(this).css("border", "1px solid var(--purple-theme-color)");
			});
			$('header ul li').mouseleave(function() {
				$(this).css("border", "1px solid rgba(33,33,33,0)");
			});
			$('.nav-icon3-container').css("top", "40px");
		}
	});
});