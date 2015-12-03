/**
 * Created by Andreas on 1/12/2015.
 */

var stompClient = null;
var person = "anonymous";
var randomColor = "#ff0000";

function connect() {
    var socket = new SockJS('http://localhost:8080/Fiz/chat');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/chat', function (chat) {
            showMessage(JSON.parse(chat.body).message, JSON.parse(chat.body).user, JSON.parse(chat.body).date);
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
                'user': person
            }));
    }

    document.getElementById('message').value = " ";
    var textarea = document.getElementById('text-area');
    textarea.scrollTop = textarea.scrollHeight;
}

function showMessage(message, user, date) {

    message = message.trim();
    document.getElementById('area-table').innerHTML += "<tr>" +
        "<td class='hello'><span class='chat-username'>" + user + ": </span>" +
        "<span class='chat-message'>" + message + "</span></td>" +
        "<td class='date'>date</td>" +
        "</tr>";
    $(".chat-username").css("color", randomColor);
}

function enterFunction(e) {
    if (e.keyCode == 13) {
        sendMessage();
    }
}

function popUp() {
    person = prompt("Please enter your username", "");
    while (!(/\S/.test(person))) {
        person = prompt("You didn't specify an username, please try again!", "");
    }

    if (person == null) {
        person = "anonymous";
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