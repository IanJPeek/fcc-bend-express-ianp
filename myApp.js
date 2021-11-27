var express = require('express');
var app = express();

console.log("Hello World")

const absolutePath = __dirname + "/views/index.html";
const middlewarePath = __dirname + "/public";

console.log

app.use(express.static(middlewarePath))

  app.get("/", function(req, res) {
    res.sendFile(absolutePath);
  });


































 module.exports = app;
