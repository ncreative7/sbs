$(document).ready(function() {

    $(".fullpage").fullpage({
      navigation: true ,
      
      afterLoad: function(origin, destination, direction, trigger){
        
        if(destination.index == 3){
          $(".move-box").addClass("active")
          $(".opci-box").addClass("active")
        }
        
      },
      onLeave : function(origin, destination, direction, trigger){
        if(origin.index == 3){
          $(".move-box").removeClass("active")
          $(".opci-box").removeClass("active")
        }
      },
      
    })
    
    $(".nav-box > .nav").click(function(){
      
      let num = $(this).index()
      fullpage_api.moveTo(num+1);
      
    })
    
  });