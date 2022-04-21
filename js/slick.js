$(document).ready(function(){
  
    $(".slider-box").slick({
      autoplay: true ,
      autoplaySpeed: 1000 ,
      // arrows: false ,
      // centerMode: true,
      // centerPadding: "100px" ,
      // cssEase: "linear" ,
      dots: true ,
      // draggable: false ,
      // fade: true ,
      infinite: false ,
      // initialSlide: 2 ,
      pauseOnHover: false ,
      responsive: [
        {
          breakpoint: 500 ,
          settings: {
            dots: false ,
            infinite: true ,
          } ,
        } , {
          breakpoint: 300 ,
          settings: {
            dots: true ,
          } ,
        }
      ] ,
      // rows: 2 ,
      // slidesPerRow: 2 ,
      slidesToShow: 1 ,
      slidesToScroll: 1 ,
      // speed: 5000 ,
      swipeToSlide: true ,
      vertical: true ,
      verticalSwiping: true ,
    })
    
  });

  /*
  $(document).ready(function(){
  
  $(".slider").slick({
    autoplay: true ,
    autoplaySpeed: 2000 ,
    arrows: false ,
    // centerMode: true , 
    // centerPadding: "100px" ,
    cssEase: "linear" ,
    dots: true ,
    // fade: true ,
    infinite: false ,
    pauseOnHover: false ,
    responsive: [
      {
        breakpoint: 500 ,
        settings: {
          dots: false ,
          infinite: true ,
        } ,
      } , {
        breakpoint: 300 ,
        settings: {
          dots: true ,
        } ,
      }
    ] ,
  })
  
})
 */

/*
$(document).ready(function(){
  $('.test').slick({
    autoplay : true , // 자동 슬라이드
    autoplaySpeed : 2000 , // 자동슬라이드 넘어가지는 속도 (ms)
    arrows : true , // 화살표 만들기.
    centerMode: false , // 보여지는 슬라이드를 중앙에 놓는 모드
    centerPadding : "50px" , //센터 모드일때. 양옆 슬라이드가 보이는 크기.
    dots: true , // 하단 닷츠 네비게이션 활성화
    draggable : true , // 드래그로 슬라이드변경 허용 여부
    fade: false , // fade in , fade out 활성화
    infinite: false , // 무한이 옆으로 흐르게 만드는 슬라이드
    initialSlide: 0 , // 처음에 활성화 될 슬라이드 번호 (인덱스 번호로)
    pauseOnHover: false , //마우스가 올라갔을 때 이동 여부
    pauseOnDotsHover: true , // 마우스가 닷츠에 올라갓을때 이동 여부
    cssEase: "linear" , // transition-timing-function 적용하기 큐빅배지어도가능
    rows: 1 , // 이미지를 몇줄로 만들꺼냐
    slidesToShow: 3, // 한번에 보여질 슬라이드 개수
    slidesToScroll: 1 , //한번에 넘길 슬라이드 개수
    speed: 1000 , //슬라이드가 넘어가지는 속도 (ms)
    swipe:  true , // 마우스 드래그로 넘기는거 허용 여부
    swipeToSlide: true , // 드래그로 여러슬라이드 넘기기 가능 여부
    vertical: false ,  // 상하 슬라이드로 변경
    verticalSwiping: true , // 상하 드래그로 슬라이드 넘기기
    responsive:   // 미디어 쿼리 기능
      [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 300,
          settings: {
            slidesToShow: 1,
          }
        }
      ],
  }); 
});
*/

/* 버튼 직접 만들기 (제이쿼리로 div 추가)
$(document).ready(function(){
  
  $(".slider").slick({
    dots: true ,
    prevArrow: '<div class="left-btn"></div>' ,
    nextArrow: '<div class="right-btn"></div>' ,
  })
  
})
*/

/*
$(document).ready(function(){
  
  $(".slider").slick({
    dots: true ,
    // prevArrow: '<div class="left-btn"></div>' ,
    // nextArrow: '<div class="right-btn"></div>' ,
    // prevArrow: $(".left-btn") , 2번째방법
    // nextArrow: $(".right-btn") ,
    arrows: false //세번째 방법
  })
  
})
*/

/*
$(document).ready(function(){
  
  $(".slider").slick({
    dots: true ,
    // prevArrow: '<div class="left-btn"></div>' ,
    // nextArrow: '<div class="right-btn"></div>' ,
    // prevArrow: $(".left-btn") ,
    // nextArrow: $(".right-btn") ,
    arrows: false ,
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
  
  
  
})
 */
