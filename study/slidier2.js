$(document).ready(function(){
  $(".slider-wrap > .slider").slick({
    // autoplay: true ,
    pauseOnHover: false ,
  })
  
  
  $('.slider-wrap > .slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
     $(".slider-wrap > .progress-bar > .bar").removeClass("active")
  });
  
   $('.slider-wrap > .slider').on('afterChange', function(event, slick, currentSlide){
      
  if( $(".paused").hasClass("active") ){
    $(".slider-wrap > .progress-bar > .bar").addClass("active")
  }
  });
  
  $(".play").click(function(){
    $(".play").removeClass("active")
    $(".paused").addClass("active")
    $(".slider-wrap > .progress-bar > .bar").addClass("active")
    $('.slider-wrap > .slider').slick("slickPlay")
  })
  $(".paused").click(function(){
    $(".play").addClass("active")
    $(".paused").removeClass("active")
    $(".slider-wrap > .progress-bar > .bar").removeClass("active")
    $('.slider-wrap > .slider').slick("slickPause")
  })
    
  $(".slider-wrap").mouseover(function(){
    $('.slider-wrap > .slider').slick("slickPause")
    $(".slider-wrap > .progress-bar > .bar").removeClass("active")
  })
  $(".slider-wrap").mouseleave(function(){
    
    if( $(".paused").hasClass("active") ){
      $('.slider-wrap > .slider').slick("slickPlay")
    $(".slider-wrap > .progress-bar > .bar").addClass("active")
    }
    
    
  })
  
})