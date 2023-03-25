const express = require("express");

const app = express();

const http = require('http').Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:8000",
    // credentials: true,
    methods: ["GET", "POST"]
  }
});
const port = process.env.PORT || 3000;


var options = {
  etag: true,
  redirect: true,
  setHeaders: function (res, _path, stat) {

    // _path là các string src có trong file index.html mà chưa bị cache được brower gửi lên sever để lấy dữ liệu
    // _path.includes('index_ghep_file.js')  kiểm tra trong string _path có chứa string 'index_ghep_file.js' nếu có trả về true
    // max-age tính bằng giây  604800 là 1 tuần
    res.set({

        'Cache-Control' :  (_path.includes('index_ghep_file.js') ) ? 'no-store' : 'public, max-age=604800'
      });
  }
}

app.use(express.static((__dirname + "/static") , options   )  );


io.on('connection', (socket) => {
  console.log('---------------------');
  socket.on('chat message', msg => {

    io.emit('chat message', 'hh' + msg);

  });
});
io.on('connection', (socket) => {
  console.log('---------------------');
  socket.on('chat message_2', msg => {

    io.emit('chat message_2', 'hh222' + msg);

  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
