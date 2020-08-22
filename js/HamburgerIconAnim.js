$(document).ready(function(){
  $('#nav-icon3').click(function(){
    $(this).toggleClass('open');
  });
});

var width = $("nav").width();
console.log(width);

// $('body'),click(function() {
//   if ($(window).width() <= 490) {
//     $('header ul').css("margin-right", "-250px");
//   }
// })