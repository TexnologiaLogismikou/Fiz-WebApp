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
        accept: "application/json",
        data : JSON.stringify(json),

        success : function(jsonObject){
            if(jsonObject.error == "success") {
                var username = jsonObject.username;
                var role = jsonObject.role;

                document.cookie="username=" + username;
                document.cookie="role=" + role;

                alert("Log in Successful")
            }
            else {
                alert("Log in failed " + jsonObject.statusText + " " + jsonObject.error)
            }
        },

        error : function() {
            alert("404");
        }
    });

}

function logout(){
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    window.location.href = "index.html";
}