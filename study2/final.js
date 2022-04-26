$(document).ready(function(){
    let mouse_state = ""
    $(".left-slide").slick({
      arrows: false ,
      draggable: false ,
      asNavFor:".right-slide",
    });
    
    $(".right-slide").slick({
      arrows: false ,
      draggable: false ,
      asNavFor:".left-slide",
    }); 
    
    $(".prev-btn").click(function(){
      $(".left-slide").slick("slickPrev");
    });
    
    $(".next-btn").click(function(){
      $(".left-slide").slick("slickNext");
    });
    
    $(".play").click(function(){
      $(".play").removeClass("active");
      $(".paused").addClass("active");
      $(".left-slide").slick("slickPlay");
    });
    $(".paused").click(function(){
      $(".play").addClass("active");
      $(".paused").removeClass("active");
      $(".left-slide").slick("slickPause");
    });
    
    // 변하기 전에
    $('.left-slide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $(".state-btn > .now").text(nextSlide + 1);
      $(".progress").removeClass("active");
      $(".dots").removeClass("active");
    });
    
    // 변하고 나서
    $('.left-slide').on('afterChange', function(event, slick, currentSlide){
      if( $(".paused").hasClass("active") && mouse_state == "off" ){
        $(".progress").addClass("active");
        $(".dots").removeClass("active");
        $(".dots").eq(currentSlide).addClass("active");
      }
    });
    
    // 닷츠
    $(".dots").click(function(){
      var indexNum = $(this).index();
      $(".left-slide").slick("slickGoTo" , indexNum)
    });
    
    // 슬라이드에 마우스를 올리면
    $(".main-visual").mouseover(function(){
      $(".left-slide").slick("slickPause");
      $(".progress").removeClass("active");
      $(".dots").removeClass("active");
      mouse_state = "on"
    });
    
    // 슬라이드에서 마우스를 떼면..
    $(".main-visual").mouseleave(function(){
      var slickNum = $(".left-slide").slick("slickCurrentSlide");
      if($(".paused").hasClass("active")){
        $(".left-slide").slick("slickPlay");
        $(".progress").addClass("active")
        $(".dots").eq(slickNum).addClass("active");
        mouse_state = "off"
      }
      
    });
    
  });