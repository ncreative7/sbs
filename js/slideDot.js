$(document).ready(function(){
    let num = 0
    let photo_length = $(".photo").length
    let photo_width = $(".photo").width()
    let photo_height = $(".photo").height()
    
    console.log(photo_length)
    console.log(photo_width)
    console.log(photo_height)
    
    $(".tv").css({
      "width": photo_width ,
      "height" :photo_height ,
    })
    
    $(".tv-wrap").css({
      "width": photo_width ,
      "height" :photo_height ,
    })
    
    $(".film").css({
      "width" :  photo_width * photo_length ,
    })
    
    for(i=0;i<photo_length;i++){
      $(".dots").append("<li></li>")
    }
    setInterval(function(){
      if(num > photo_length-1){
        num=0
      }
      $(".film").css({
        "left": - photo_width * num ,
      })
      
      $(".dots > li").eq(num).addClass("active")
      $(".dots > li").eq(num).siblings().removeClass("active")
      num++
    } ,1000 )
  })