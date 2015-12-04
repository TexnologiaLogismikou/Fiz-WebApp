/**
 * Created by Andreas on 1/12/2015.
 */

var stompClient = null;
var person = "anonymous";
var randomColor = "#ff0000";

function connect() {
    var socket = new SockJS('http://83.212.105.54:8080/chat');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/chat', function (chat) {
            showMessage(JSON.parse(chat.body).message, JSON.parse(chat.body).user, JSON.parse(chat.body).date, JSON.parse(chat.body).color);
        });
    });
}

function disconnect() {
    if (stompClient != null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function sendMessage() {
    var message = document.getElementById('message').value;

    if (/\S/.test(message)) {
        stompClient.send("/app/chat", {}, JSON.stringify(
            {
                'message': message,
                'user': person,
                'color': randomColor
            }));
    }
    document.getElementById('message').value = " ";
}

function showMessage(message, user, date, color) {

    message = message.trim();
    document.getElementById('area-table').innerHTML += "<tr>" +
        "<td class='hello'><span class='chat-" + user + "'>" + user + ": </span>" +
        "<span class='chat-message'>" + message + "</span></td>" +
        "<td class='date'>" + date + "</td>" +
        "</tr>";

    var userClass = $(".chat-" + user);
    userClass.css("color", color);
    userClass.css("font-weight", "bold");

    var textarea = document.getElementById('text-area');
    textarea.scrollTop = textarea.scrollHeight;
}

function enterFunction(e) {
    if (e.keyCode == 13) {
        sendMessage();
    }
}

function popUp() {
    if (getCookie('username') == '') {
        person = "Anonymous"
    }
    else {
        person = getCookie('username');
    }

    randomColor = getRandomColor();
}


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color.toString();
}