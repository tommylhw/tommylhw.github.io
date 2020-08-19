var owl = $('.owl-carousel')
var itemNum;
var lastWidth = $(window).width();

$(window).resize(function(){
  if($(window).width()!=lastWidth){
    location.reload();
    lastWidth = $(window).width();
 }
  
});

$(window).ready(function() {
  if (window.innerWidth <= 500) {
    itemNum = 1;
  } else if (window.innerWidth <= 815) {
    itemNum = 2;
  } else {
    itemNum = 3;
  }

  owl.owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    items: itemNum,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000
  });
});

// prev and next controller
$('.prev').click(function() {
    owl.trigger('prev.owl.carousel');
    if (autoplay) {
        owl.trigger('stop.owl.autoplay');
        owl.trigger('play.owl.autoplay',[5000]);
    }
});

$('.next').click(function() {
    owl.trigger('next.owl.carousel');
    if (autoplay) {
        owl.trigger('stop.owl.autoplay');
        owl.trigger('play.owl.autoplay',[5000]);
    }
});

// autoplay controller
var autoPlay;
autoplay = false;

function AutoPlayController() {
    autoplay = !autoplay;
    SetPlayPauseIcon();
    if (autoplay) {
        owl.trigger('play.owl.autoplay',[5000]);
    } else {
        owl.trigger('stop.owl.autoplay');
    }
}

function SetPlayPauseIcon() {
  if (autoplay) {
    $('#play-pause-btn').removeClass("fa-play-circle");
    $('#play-pause-btn').addClass("fa-pause-circle");
  } else {
    $('#play-pause-btn').addClass("fa-play-circle");
    $('#play-pause-btn').removeClass("fa-pause-circle");
  }
}