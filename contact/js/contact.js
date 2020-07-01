$(document).ready(function(){
    $("#send-message-btn").on("mouseover",function(){
        $("#send-message-btn").removeClass("btn-light");
        $("#send-message-btn").addClass("btn-info");
        $("#send-message-btn").addClass("text-light");
    });
    $("#send-message-btn").on("mouseout",function(){
        $("#send-message-btn").addClass("btn-light");
        $("#send-message-btn").removeClass("btn-info");
        $("#send-message-btn").removeClass("text-light");
    });
});


/*scroll top*/
$(window).scroll(function(){
    if($(window).scrollTop()>200){
        //alert("scroll 200");
        $("#top-btn").show();
    }
    else{
        $("#top-btn").hide();
    }
    $("#top-btn").click(function(){
        $("html").animate({scrollTop:0});
    });
});


/*scroll top*/


$(document).ready(function(){
    $("form").on("submit",function(e){
        
    });
});