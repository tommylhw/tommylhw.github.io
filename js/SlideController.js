$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 5) {
      $('.sub-header').css("box-shadow", "0 0 12px rgba(33,33,33,.5)");
		} else {
			$('.sub-header').css("box-shadow", "0 0 12px rgba(33,33,33,0)");
		}
  });
});

// $(window).resize(function(){
//   if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
// 		console.log("true");
// 		$(".footer-position").css("position", "fixed");
// 		$(".footer-position").css("bottom", "0");
// 	} else {
// 		console.log("false");
// 		$(".footer-position").css("position", "static");
// 	}
// });

// if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
// 	console.log("true");
// 	$(".footer-position").css("position", "fixed");
// 	$(".footer-position").css("bottom", "0");
// } else {
// 	console.log("false");
// 	$(".footer-position").css("position", "static");
// }