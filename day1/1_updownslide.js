$(document).ready(function(){
  let num=0;
  setInterval(function(){
    if(num>3){
      num=0;
    }
    console.log(num);
    
    $(".film").css({
      "top":-360*num,
    })
    num++;
  }, 3000)
})