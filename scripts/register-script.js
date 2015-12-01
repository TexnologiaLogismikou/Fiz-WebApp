/**
 * Created by Andreas on 1/12/2015.
 */


function registerUser() {
    $.ajax({

        url  : "http://localhost:8080/register",
        type : "post",
        crossDomain: true,
        data : {
            "username" : document.getElementById("username").value,
            "password" : document.getElementById("username").value
        },

        success : function(str){
            alert(str)
        },

        error : function() {
            alert("eroor");
        }
    })
}