$(document).ready(function(){
    let num=0
    setInterval(function(){
        if(num>3){
            num=0
        }
        console.log(num+1+"번째")
        $('.contain').css({
            "top":-300*num,
        })
        num++
    },1000)
})