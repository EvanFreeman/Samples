﻿var sys = require('sys'),
fs = require('fs'),
http = require('http'),
url = require('url');

var http = require("http");

http.createServer(function (req, res) {
    var html = "<!doctype html>" +
      "<html><head><title>Hello world</title></head>" +
      "<body><h1>Hello, world!</h1></body></html>";

    res.writeHead(200, {
        // set the type of content we're returning
        "Content-Type": "text/html",    // set the length of our content
        "Content-Length": html.length
    });
    // end the response, sending it and returning our HTML
    res.end(html);
}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');



//var url_parts = url.parse(req.url);
//sys.puts(url_parts.pathname);