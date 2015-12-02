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
        success : function(str){
            alert(str)
        },

        error : function() {
            alert("error");
        }
    });

}
