
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