const express = require("express");

const app = express();

const http = require('http').Server(app);
// const io = require('socket.io')(http);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost",
    // credentials: true,
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('--------lient -kết nối------------');
  socket.on('chat message', msg => {
   
    
    io.emit('chat message', 'hh' + msg + x);

  });
});
io.on('connection', (socket) => {
  console.log('---------------------');
  socket.on('chat message_2', msg => {

    io.emit('chat message_2', 'hh222' + msg);

  });
});

http.listen(8001, () => {
  console.log(`Socket.IO server running at http://localhost:8001/`);
});
