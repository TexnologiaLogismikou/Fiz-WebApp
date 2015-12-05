/**
 * Created by Andreas on 1/12/2015.
 */


function registerUser() {
    var json = {
        "username": document.getElementById("username").value,
        "first_name": document.getElementById("first_name").value,
        "password": document.getElementById("password").value,
        "last_name": document.getElementById("lastname").value,
        "email": document.getElementById("email").value,
        "birthday": document.getElementById("birthday").value
    };
    $.ajax({
        url  : "http://83.212.105.54:8080/Fiz/register",
        type : "post",
        crossDomain: true,
        contentType: "application/json;",
        data: JSON.stringify(json),
        success: function (str) {
            alert(str)
        },

        error: function () {
            alert("error");
        }
    })
}