$(document).ready(function(){
  let num=0;
  setInterval(function(){
    if(num>3){
      num=0;
    }
    console.log(num);
    $(".photo").eq(num).addClass("active")
    $(".photo").eq(num).siblings().removeClass("active")
      
    num++;
  } , 1000)
  
})