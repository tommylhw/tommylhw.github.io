$(window).resize(function(){
  var rightHolderWidth = $(window).width() - 320 - 600;
  // console.log(rightHolderWidth);

  if ($(window).width() <= 1260) {
    $(".right-holder").css("width", rightHolderWidth + "px");
  }
});