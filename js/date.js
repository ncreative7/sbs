$(document).ready(function(){
    setInterval(function(){
    let calendar_date = new Date()
    let calendar_year = calendar_date.getFullYear()
    let calendar_mon = calendar_date.getMonth() + 1
    let calendar_num = calendar_date.getDate()
    let calendar_hour = calendar_date.getHours()
    let calendar_min = calendar_date.getMinutes()
    let calendar_sec = calendar_date.getSeconds()
    
    if(calendar_hour < 10){
      calendar_hour = "0" + calendar_hour
    }
    if(calendar_min < 10){
      calendar_min = "0" + calendar_min
    }
    if(calendar_sec < 10){
      calendar_sec = "0" + calendar_sec
    }
    
    if(calendar_mon < 10){
      calendar_mon = "0" + calendar_mon
    }  
    if(calendar_date < 10){
      calendar_date = "0" + calendar_date
    }
    
    console.log( calendar_date.getMonth()+1 )
    
    $(".calendar").text(calendar_year + " / "+ calendar_mon + " / " + calendar_num)
    $(".clock").text(calendar_hour + " : " + calendar_min + " : " + calendar_sec)
  
    }, 1000)
  
  
    
  });