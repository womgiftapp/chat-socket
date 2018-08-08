// Request from client to server open up web socket and keep the connection open
var socket = io();

// Connect to server event listener
socket.on('connect', function () {
    console.log('Connected to server');

    // Emit data from client to server
    socket.emit('createMessage', {
        from: "Ron",
        text: "hi. How are you?"
    });
});


// Disconnect from server event listener
socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

// Get newMessage emitted data from server 
socket.on('newMessage', function (message) {
    // email - emitted data from the server
    console.log('New Message', message);
});



