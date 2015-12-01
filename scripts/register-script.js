/**
 * Created by Andreas on 1/12/2015.
 */


function registerUser() {
    var json = {
        "username" : document.getElementById("username").value,
        "password" : document.getElementById("password").value,
        "last_name" : document.getElementById("lastname").value,
        "email" : document.getElementById("email").value,
        "birthday" : document.getElementById("birthday").value};
    $.ajax({
        url  : "http://localhost:8080/Fiz/register",
        type : "post",
        dataType: json,
        contentType: "application/json;",
        crossDomain: true,
        data : JSON.stringify(json),
        success : function(str){
            alert(str)
        },

        error : function() {
            alert("error");
        }
    })
}