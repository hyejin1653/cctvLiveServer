var express = require('express');
var app = express();
var cors = require('cors');
var liveServer = require('live-server');

app.use(cors({
    origin: "*",
    header: "Access-Control-Allow-Origin : *"
  }));

app.get('/liveServer1', (req, res) => {
    console.log('liveServer1');
    var param = {
        port : 55001,
        host: "127.0.0.1",
        root: "./",
        open : false,
        file: "liveServer1.html",
        //mount: [['/components', './node_modules']], // Mount a directory to a route.
        logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
        middleware: [function(req, res, next) { next(); }] 
    }
    liveServer.start(param);
    res.send(liveServer);
    //res.sendFile(__dirname + '/liveServer1.html');
});


app.get('/liveServer2', (req, res) => {
    console.log('liveServer2');
    var param = {
        port : 55002,
        host: "210.119.20.104",
        root: "./",
        open : false,
        file: "liveServer2.html",
        //mount: [['/components', './node_modules']], // Mount a directory to a route.
        logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
        middleware: [function(req, res, next) { next(); }] 
    }
    liveServer.start(param);

    //res.sendFile(__dirname + '/liveServer1.html');
});

const hostname = '127.0.0.1';
const port = 3300;
app.listen(port,hostname,function(){
    console.log("http://"+hostname + ":" + port);
});