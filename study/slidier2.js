$(document).ready(function(){
  $(".slider-wrap > .slider").slick({
    // autoplay: true ,
  })
  
  
  $('.slider-wrap > .slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
     $(".slider-wrap > .progress-bar > .bar").removeClass("active")
  });
  
   $('.slider-wrap > .slider').on('afterChange', function(event, slick, currentSlide){
     
     $(".slider-wrap > .progress-bar > .bar").addClass("active")
     
  });
  
  $(".play").click(function(){
    $(".play").removeClass("active")
    $(".paused").addClass("active")
    $('.slider-wrap > .slider').slick("slickPlay")
  })
  $(".paused").click(function(){
    $(".play").addClass("active")
    $(".paused").removeClass("active")
    $('.slider-wrap > .slider').slick("slickPause")
  })
  
  
})