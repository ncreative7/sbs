$(document).ready(function(){
    
    $('.slider').on('init', function(event, slick){//   슬라이더가 만들어지기전에 시작해라 init
      $(".content").eq(1).addClass("active")
      $(".dot").eq(0).addClass("active")
    });
    
    $(".slider").slick({
      dots: true ,
      // prevArrow: '<div class="left-btn"></div>' ,
      // nextArrow: '<div class="right-btn"></div>' ,
      // prevArrow: $(".left-btn") ,
      // nextArrow: $(".right-btn") ,
      arrows: false ,
      customPaging: function(slide , i){
        let slide_num = $(slide.$slides[i]).attr("data-dots-txt")
        
        console.log(slide_num)
        
        return slide_num
      } ,
    })
    
    // 상황 left-btn 을 클릭하면.. 기능이 작동한다.
    // 기능 슬라이드가 이전으로 간다.
    
    $(".left-btn").click(function(){
      
      $('.slider').slick('slickPrev')
      
    })
    $(".right-btn").click(function(){
      
      $('.slider').slick('slickNext')
      
    })
    
    $(".play").click(function(){
      
      $(".play").removeClass("active")
      $(".pause").addClass("active")
      $('.slider').slick('slickPlay')
      
    })
      $(".pause").click(function(){
      
      $(".play").addClass("active")
      $(".pause").removeClass("active")
      $('.slider').slick('slickPause')
      
    })
    
    $(".dots > .dot").click(function(){
      
      let num = $(this).index()
      console.log(num)
      
      $('.slider').slick('slickGoTo' , num);
    })
    
    
    $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      console.log("비포체인지");
      $(".dot5").text( nextSlide+1 + " / 4")
      $(".dots > .dot").eq(nextSlide).addClass("active")
      $(".dots > .dot").eq(nextSlide).siblings().removeClass("active")
      
      $(".content").removeClass("active")
      
    });
  
    $('.slider').on('afterChange', function(event, slick, currentSlide){
      console.log(currentSlide);
      
      $(".content").eq(currentSlide+1).addClass("active")
      
  
      
    });
  
  })
