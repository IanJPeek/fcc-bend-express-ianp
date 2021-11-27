var express = require('express');
var app = express();

console.log("Hello World")

const absolutePath = __dirname + "/views/index.html";

console.log(absolutePath)

  app.get("/", function(req, res) {
    res.sendFile(absolutePath);
  });


































 module.exports = app;
