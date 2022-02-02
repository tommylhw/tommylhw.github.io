// $('.mark').mouseenter(
//   function() {
//     $(this).removeClass('animate-out');
//     $(this).addClass('animate-in');
//   }
// );

// $('.mark').mouseleave(
//   function() {
//     $(this).removeClass('animate-in');
//     $(this).addClass('animate-out');
//   }
// );

// let observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.IsIntersecting) {
//       entry.target.classList.add('animate-in')
//       observer.unobserve(entry.target)
//     }
//   })
// })

// document.querySelectorAll('mark').forEach(mark => {
//   observer.observe(mark)
// });


// window.onload = (event) => {
//   $('.mark').addClass('animate-in');
// };

window.addEventListener('scroll', function() {
	var element = document.querySelector('.mark');
	var position = element.getBoundingClientRect();

	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		// console.log('Element is fully visible in screen');
    $('.mark').addClass('animate-in');
	} else {
    $('.mark').removeClass('animate-in');
  }

	// checking for partial visibility
	if(position.top < window.innerHeight && position.bottom >= 0) {
		// console.log('Element is partially visible in screen');

	}
});