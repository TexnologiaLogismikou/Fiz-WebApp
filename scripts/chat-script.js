/**
 * Created by Andreas on 1/12/2015.
 */

var stompClient = null;
var person = "anonymous";

function connect() {
    var socket = new SockJS('http://83.212.105.54:8080/Fiz/chat');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/chat', function (chat) {
            showMessage(JSON.parse(chat.body).message, JSON.parse(chat.body).user);
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

function showMessage(message, user) {
    message = message.trim();
    document.getElementById('text-area').value += user + ": " + message + "\n";
}

function enterFunction(e) {
    if (e.keyCode == 13) {
        sendMessage();
    }
}

function popUp() {
    person = prompt("Please enter your username", "");
    if (person == null) {
        person = "anonymous";
    }
    while (!(/\S/.test(person))) {
        person = prompt("You didn't specify an username, please try again!", "");
    }
}