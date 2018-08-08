const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
//var io = socketIO(server,{'pingInterval': 2000, 'pingTimeout': 5000});


// Middleware use public folder 
app.use(express.static(publicPath));

// Listen for client connection to server
io.on('connection', (socket) => {
    console.log('New user connected');

    // Emit data from server to client
    socket.emit('newMessage', {
        to: "Rita",
        text: "Hi this is a new message"
    });

    //Listen for client events    
    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
    });

   
    //Listen for client disconnect event
    socket.on('disconnect', (reason) => {
        console.log('User was disconnected ' + reason);
    });
});


server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});