/**
 * Created by Andreas on 1/12/2015.
 */

var stompClient = null;

function connect() {
    var socket = new SockJS('http://localhost:8080/chat');
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
    var userid = "Andreas";
   if (/\S/.test(message)) {
        stompClient.send("/app/chat", {}, JSON.stringify(
            {
                'message': message,
                'user': userid
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
