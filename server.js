//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');
var fs = require('fs');
var express = require('express');
var app = express();
 

app.use(express.static('public'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + 'index.html');
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + 'part.html');
});

//app.use(express.static(path.resolve(__dirname)));
//app.use(express.static(path.resolve(__dirname + '/part.html')));
// ## SimpleServer `SimpleServer(obj)`
// https://codeforgeek.com/2015/01/render-html-file-expressjs/
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
var server = http.createServer(app);


//working index html 



server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
