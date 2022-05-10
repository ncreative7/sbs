$(document).ready(function(){

    $('.slider').on('init', function(event, slick){ //초기화
        $(".content").eq(1).addClass("active")
        $(".dot").eq(0).addClass("active")
      });

    $('.slider').slick({
        dots : true,
        arrows : false, // 본 슬릭의 좌우 제거
        customPaging: function(slide, i){
            let slide_txt = $(slide.$slides[i]).attr('dots-txt')
            // console.log(slide_txt) 슬라이드 이미지의 이름 출력
            return slide_txt
        },
    })

    /* 버튼 설정 */

    $('.l-btn').click(function(){
        $('.slider').slick('slickPrev')
    })

    $('.r-btn').click(function(){
        $('.slider').slick('slickNext')
    })

    $('.play').click(function(){
        $('.play').removeClass('active')
        $('.pause').addClass('active')
        $('.slider').slick('slickPlay')
    })

    $('.pause').click(function(){
        $('.pause').removeClass('active')
        $('.play').addClass('active')
        $('.slider').slick('slickPause')
    })

    /* 닷츠 설정 */
    $(".dots > .dot").click(function(){
        let num = $(this).index()
        console.log(num+1) //닷츠 순서 출력
        $('.slider').slick('slickGoTo' , num);
    })

    $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".numbering").text(nextSlide+1 + " / 4")
        $(".dots > .dot").eq(nextSlide).addClass("active")
        $(".dots > .dot").eq(nextSlide).siblings().removeClass("active")

        $(".content").removeClass("active")
    });

    $('.slider').on('afterChange', function(event, slick, currentSlide){
        $(".content").eq(currentSlide+1).addClass("active")
    });
})
