/**
 * Created by Andreas on 1/12/2015.
 */

function navigator() {
    /* -gets the name of the html page- */
    var path = window.location.pathname;
    var page = path.split("/").pop();
    console.log(page);



    /* -menu links- */
    var login = "<li></li><a href='/login.html'>log in</a></li>";
    if (getCookie('username') != '') {
        login = "<li></li><a  onclick='logout()'>log out</a></li>";
    }
    var register = "<li><a href='/register.html'>register</a></li>";
    var chat = "<li><a href='/chat.html'>chat</a></li>";
    var home = "<li><a href='/index.html'>home</a></li>";
    var profile = "<li><a href='#'>profile</a></li>";

    /* -set the selected link- */
    switch (page) {
        case "index.html":
            home = "<li><a class='selected' href='/index.html'>home</a></li>";
            break;
        case "log-in.html":
            login = "<li></li><a class='selected' href='/login.html'>log in</a></li>";
            break;
        case "register.html":
            register = "<li><a class='selected' href='/register.html'>register</a></li>";
            break;
        case "chat.html":
            chat = "<li><a class='selected' href='/chat.html'>chat</a></li>";
            break;
        case "profile.html":
            profile = "<li><a class='selected' href='#'>profile</a></li>";
            break;
        default:
    }

    var nav = "<ul>" + home + login + register + chat + profile + "</ul>";
    $("#navigator").html(nav);
}