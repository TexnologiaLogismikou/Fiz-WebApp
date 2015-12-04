/**
 * Created by KuroiTenshi on 12/2/2015.
 */

function loginUser(){
    var json = {"username" : document.getElementById("username").value,
                "password" : document.getElementById("password").value};

    $.ajax({
        url  : "http://83.212.105.54:8080/Fiz/login",
        type : 'post',
        crossDomain: true,
        contentType: "application/json;",
        data : JSON.stringify(json),

        success : function(jsonObject){
            if(JSON.parse(jsonObject).error == "success") {
                var username = JSON.parse(jsonObject).username;
                var role = JSON.parse(jsonObject).role;

                document.cookie="username=" + username;
                document.cookie="role=" + role;

                alert("Log in Successful")
            }
            else {
                alert("Log in failed")
            }
        },

        error : function() {
            alert("404");
        }
    });

}
