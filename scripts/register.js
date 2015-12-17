/**
 * Created by Andreas on 1/12/2015.
 */


function registerUser() {


    var birthday = new Date("5/4/2000");
    var json = {
        "username": document.getElementById("username").value,
        "firstname": document.getElementById("first_name").value,
        "password": document.getElementById("password").value,
        "last_name": document.getElementById("lastname").value,
        "email": document.getElementById("email").value,
        "birthday": birthday
    };
    $.ajax({
        url: "http://83.212.105.54:8080/register",
        type: "post",
        crossDomain: true,
        contentType: "application/json;",
        data: JSON.stringify(json),

        success: function () {
            alert("Registration successful");
            window.location.href = "index.html";
        },

        error: function (a, b, c) {

            var errorMessage = "error " + a.status + " , " + b + " , " + c;
            document.getElementById("#error-message").innerHTML = errorMessage;
        }
    })
}