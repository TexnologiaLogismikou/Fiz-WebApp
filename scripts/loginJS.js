function loginUser() {

    $.ajax({
        url: "http://83.212.105.54:8080/Fiz/login",
        type: 'post',
        crossDomain: true,
        xhrFields: {
            withCredentials: true
        },

        data: $("#form").serialize(),

        success: function (response, status, xhr) {
            alert(JSON.stringify(xhr));
        },

        error: function (response, b, c) {
            alert("Error " + response.status + " " + b + " " + c);
        }
    });
}

function logout() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    window.location.href = "index.html";
}