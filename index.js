var PORT = process.env.PORT || 8080;
var express = require('express');
var app = express();
const fs = require('fs');

var http = require('http');
var server = http.Server(app);
//var cad = "";
app.use(express.static('client'));

server.listen(PORT, function() {
  console.log('Chat server running');
});

var io = require('socket.io')(server);

io.on('connection', function(socket) {
  socket.on('message', function(msg) {
    io.emit('message', msg);
    console.log(msg);
    //cad = " "+cad;
    fs.writeFile('capturaChat/chat.txt' , msg,function() {
      console.log('File saved!');
    });
  });
  
});

