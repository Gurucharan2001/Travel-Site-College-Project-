$(document).ready(function(){
    $("form").on("submit",function(e){
        e.preventDefault();
        var password = $("#password").val();
        var con_password = $("#confirm-password").val();
        if(password === con_password){
            alert("Sign Up Success!!");
            $("form").trigger("reset");
        }
        else{
            $("#wrong-pass").html("Please Check Your Password!");
            setTimeout(function(){
                $("#wrong-pass").html("");
            },2000);
        }
    });
});