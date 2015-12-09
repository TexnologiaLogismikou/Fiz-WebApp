/**
 * Created by KuroiTenshi on 12/2/2015.
 */

function loginUser(){
    $.ajax({
        url  : "http://83.212.105.54:8080/Fiz/login",
        type : 'post',
        crossDomain: true,
        contentType: "application/json;",
        accept: "application/json",
        data : {
            "j_username" : document.getElementById("username").value,
            "j_password" : document.getElementById("password").value
        },

        success : function(jsonObject){
            alert(jsonObject.toString);
        },

        error : function(r, s, e) {
            alert("Error " + " - " + r + " - " + s +" - " + e);
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