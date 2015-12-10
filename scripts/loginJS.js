/**
 * Created by KuroiTenshi on 12/2/2015.
 */

//var Session = {
//    id : '${pageContext.session.id}',
//    user : '${pageContext.request.remoteUser}'
//};

function loginUser(){

    $.ajax({
        url  : "http://83.212.105.54/Fiz/login",
        type : 'post',
        crossDomain: true,
        //contentType: "application/json;",
        //accept: "application/json",
        data : $("#form").serialize(),

        success : function(a,b,c){
            document.cookie = a;
            alert(a.status+" 1 "+ a+" 2 "+b+" 3 "+ c);
        },

        error : function(response, b, c) {
            alert("Error "+response.status+ " "+b+" "+c);
        }
    });

}

//function setCookie(name,value,expires,path,domain,secure) {
//    var cookieString = name + "=" + escape(value) +
//        ( (expires) ? ";expires=" + expires.toGMTString() : "") +
//        ( (path) ? ";path=" + path : "") +
//        ( (domain) ? ";domain=" + domain : "") +
//        ( (secure) ? ";secure" : "");
//    document.cookie = cookieString;
//}

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