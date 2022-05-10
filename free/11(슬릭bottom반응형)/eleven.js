$(document).ready(function(){
    $('.slider').on('init', function(event, slick){ //초기화
        $(".content").eq(1).addClass("active")
      });

    $('.slider').slick({})

    $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".content").removeClass("active")
    });

    $('.slider').on('afterChange', function(event, slick, currentSlide){
        $(".content").eq(currentSlide+1).addClass("active")
    });
})